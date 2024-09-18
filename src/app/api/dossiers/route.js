import executeQuery from '@/Config/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  console.log('dossiers welcome')
  try {
    const rows = await executeQuery('SELECT * FROM dossiers');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error('Failed to fetch dossiers:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch dossiers' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { numero, demandeur, defendeur, id_granddossier, date_audience, id_tribunal, commentaire } = await req.json();
    const uuid = uuidv4();
    const result = await executeQuery(
      'INSERT INTO dossiers (uuid, id_grand, numero, demandeur, defendeur, date_audience, tribunal, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [uuid, id_granddossier, numero, demandeur, defendeur, date_audience, id_tribunal, commentaire]
    );
    return new Response(JSON.stringify({ id: result.insertId }), { status: 201 });
  } catch (error) {
    console.error('Failed to insert dossier:', error);
    return new Response(JSON.stringify({ error: 'Failed to insert dossier' }), { status: 500 });
  }
}

