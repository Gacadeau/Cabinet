import executeQuery from '@/Config/db';

export async function POST(req) {
  console.log('tribunal welcome')
  try {
    const { nom } = await req.json();
    const result = await executeQuery('INSERT INTO tribunal (nom) VALUES (?)', [nom]);
    const tribunalId = result.insertId;
    return new Response(JSON.stringify({ id: tribunalId, nom }), { status: 201 });
  } catch (error) {
    console.error('Failed to insert tribunal:', error);
    return new Response(JSON.stringify({ error: 'Failed to insert tribunal' }), { status: 500 });
  }
}
