import { NextResponse } from 'next/server';
import executeQuery from '@/Config/db';

export async function POST(req) {
  try {
    const body = await req.json();
    const { id_grand } = body;

    if (!id_grand) {
      return NextResponse.json({ message: 'id_grand required' }, { status: 404 });
    }

    const result = await executeQuery('SELECT numero FROM dossiers WHERE id_grand = ?', [id_grand]);

    const rows = Array.isArray(result) ? result : [];

    const numeros = rows.map(row => row.numero);

    return NextResponse.json(numeros, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ message: "Erreur lors de la selection des numeros" }, { status: 500 });
  }
}
