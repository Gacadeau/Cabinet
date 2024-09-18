import executeQuery from '@/Config/db';

export async function POST(req) {
  console.log('caisse welcome')
  try {
    const { montant, id_granddossier } = await req.json();
    const result = await executeQuery(
      'INSERT INTO caisse (dossier,montant) VALUES (?, ?)',
      [ id_granddossier,montant]
    );
    return new Response(JSON.stringify({ id: result.insertId }), { status: 201 });
  } catch (error) {
    console.error('Failed to insert into caisse:', error);
    return new Response(JSON.stringify({ error: 'Failed to insert into caisse' }), { status: 500 });
  }
}
