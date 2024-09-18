import { NextResponse } from 'next/server';
import executeQuery from '@/Config/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  try {
    const body = await req.json();
    const { id_dossier, numero, date_audience, commentaire } = body;

    // Vérifiez si le dossier existe
    const existingDossier = await executeQuery('SELECT * FROM dossiers WHERE id = ?', [id_dossier]);

    if (existingDossier.length === 0) {
      return NextResponse.json({ message: 'Dossier not found' }, { status: 404 });
    }

    const dossier = existingDossier[0];

    // Mettez à jour le dossier existant en définissant `fusion` à 1
    await executeQuery('UPDATE dossiers SET fusion = ? WHERE id = ?', [1, id_dossier]);

    // Créez un nouvel UUID pour le nouveau dossier
    const newUuid = uuidv4();

    // Insérez un nouveau dossier avec les informations fournies
    const result = await executeQuery(
      'INSERT INTO dossiers (uuid, numero, date_audience, demandeur, defendeur, comment, id_grand, tribunal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [newUuid, numero, date_audience, dossier.demandeur, dossier.defendeur, commentaire, dossier.id_grand, dossier.tribunal]
    );

    const newDossierId = result.insertId;

    // Insérez une nouvelle fusion associée au dossier
    await executeQuery(
      'INSERT INTO fusion (numero, dossier, comment) VALUES (?, ?, ?)',
      [id_dossier, newDossierId, commentaire]
    );

    return NextResponse.json({ message: 'Fusion créée avec succès' }, { status: 200 });
  } catch (error) {
    console.error('Error creating fusion:', error);
    return NextResponse.json({ message: 'Erreur lors de la création de la fusion' }, { status: 500 });
  }
}
