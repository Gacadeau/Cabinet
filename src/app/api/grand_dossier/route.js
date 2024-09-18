import executeQuery from '@/Config/db';

export async function POST(req) {
  console.log('grand_dossier welcome')
  try {
    const { montant } = await req.json();
    const result = await executeQuery('INSERT INTO grand_dossier (montant) VALUES (?)', [montant]);
    const grandDossierId = result.insertId;
    return new Response(JSON.stringify({ id: grandDossierId, montant }), { status: 201 });
  } catch (error) {
    console.error('Failed to insert grand dossier:', error);
    return new Response(JSON.stringify({ error: 'Failed to insert grand dossier' }), { status: 500 });
  }
}
