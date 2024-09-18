import { NextResponse } from 'next/server';
import executeQuery from '@/Config/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
    try {
        const body = await req.json();
        const { numero, date_audience, commentaire, dossier_id } = body;

        const existingDossier = await executeQuery('SELECT * FROM dossiers WHERE id = ?', [dossier_id]);
        if (existingDossier.length === 0) {
            return NextResponse.json({ message: 'Dossier not found' }, { status: 404 });
        }

        const dossier = existingDossier[0];

        await executeQuery(
            'UPDATE dossiers SET retour = ? WHERE id = ?',
            [1, dossier_id]
        );

        const newUuid = uuidv4();
        const result = await executeQuery(
            'INSERT INTO dossiers (uuid, id_grand, numero, demandeur, defendeur, date_audience, tribunal, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
                newUuid,
                dossier.id_grand,
                numero,
                dossier.demandeur,
                dossier.defendeur,
                date_audience,
                dossier.tribunal,
                commentaire
            ]
        );

        const dossierId = result.insertId;

        await executeQuery(
            'INSERT INTO retour (dossier, new_dossier, comment) VALUES (?, ?, ?)',
            [dossier_id, dossierId, commentaire]
        );

        return NextResponse.json({ message: 'Dossier retourné et nouvelle ligne insérée avec données de retour enregistrées' }, { status: 201 });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ message: 'Erreur lors de la création de la Return' }, { status: 500 });
    }
}
