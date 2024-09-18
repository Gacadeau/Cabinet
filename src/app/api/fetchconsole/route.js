import { NextResponse } from 'next/server';
import executeQuery from '@/Config/db';

export async function POST(req) {
  try {
    const body = await req.json();
    const { id_dossier } = body;
    
    const existingDossier = await executeQuery('SELECT id FROM dossiers WHERE id = ? AND console = 2', [id_dossier]);

    if (existingDossier.length === 0) {
      return NextResponse.json({ message: 'Dossier non trouvé ou console != 2' }, { status: 404 });
    }

    const consoleRows = await executeQuery('SELECT console FROM console WHERE dossier = ?', [id_dossier]);

    if (consoleRows.length === 0) {
      return new Response(JSON.stringify([]));
    }

    const consoleIds = consoleRows.map(row => row.console);

    const relatedDossiers = await executeQuery('SELECT * FROM dossiers WHERE id IN (?)', [consoleIds]);
    
    return new Response(JSON.stringify(relatedDossiers), { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ message: "Erreur lors de la selection des consoles" }, { status: 500 });
  }
}
