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

    // Créez un nouvel UUID pour le nouveau dossier
    const newUuid = uuidv4();

    // Insérez un nouveau dossier avec les informations fournies
    const result = await executeQuery(
    'INSERT INTO dossiers (uuid, id_grand, numero, demandeur, defendeur, date_audience,precedent, tribunal, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          newUuid,
          dossier.id_grand,
          numero,
          dossier.demandeur,
          dossier.defendeur,
          date_audience,
          id_dossier,
          dossier.tribunal,
          commentaire
        ]
    );



    return NextResponse.json({ message: 'Dossier avance et nouvelle ligne insérée avec données davancement enregistrées' }, { status: 200 });
  } catch (error) {
    console.error('Error creating fusion:', error);
    return NextResponse.json({ message: 'Erreur lors de la création de la fusion' }, { status: 500 });
  }
}
