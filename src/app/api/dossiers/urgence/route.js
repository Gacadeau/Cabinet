import { NextResponse } from 'next/server';
import executeQuery from '@/Config/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  try {
    const body = await req.json();
    const { id_dossier, numero, date_audience, demandeur, defendeur, tribunal, commentaire } = body;

    // Vérifiez si le dossier existe
    const existingDossier = await executeQuery('SELECT * FROM dossiers WHERE id = ?', [id_dossier]);

    if (existingDossier.length === 0) {
      return NextResponse.json({ message: 'Dossier not found' }, { status: 404 });
    }

    const dossier = existingDossier[0];

    // Mettez à jour le dossier existant en définissant `urgence` à 1
    await executeQuery('UPDATE dossiers SET urgence = ? WHERE id = ?', [1, id_dossier]);

    // Créez un nouvel UUID pour le nouveau dossier
    const newUuid = uuidv4();

    // Insérez un nouveau dossier avec les informations fournies
    const result = await executeQuery(
      'INSERT INTO dossiers (uuid, numero, date_audience, demandeur, defendeur, comment, id_grand, tribunal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [newUuid, numero, date_audience, demandeur, defendeur, commentaire, dossier.id_grand, tribunal]
    );

    const newDossierId = result.insertId;

    // Insérez une nouvelle urgence associée au dossier
    await executeQuery(
      'INSERT INTO urgence (dossier, numero, comment) VALUES (?, ?, ?)',
      [id_dossier, newDossierId, commentaire]
    );

    return NextResponse.json({ message: 'Urgence créée avec succès' }, { status: 200 });
  } catch (error) {
    console.error('Error creating penalité:', error);
    return NextResponse.json({ message: "Erreur lors de la création d'urgence" }, { status: 500 });
  }
}
