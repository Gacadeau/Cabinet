import executeQuery from '@/Config/db';
export async function GET(request) {
    try {
        const result = await executeQuery('SELECT c.*, (SELECT COUNT(*) FROM grand_dossier gd WHERE gd.user = c.id) AS nombre_dossiers FROM client c WHERE c.type=0', [])
        console.log('te', result)
        const response = result
        console.log('oop', response)
        if (response) {
            return new Response(JSON.stringify({ message: 'Success', data: response }))
        }
        else {
            console.log('object', response)
            return new Response(JSON.stringify({ message: 'Error' }))
        }
    }
    catch (error) {
        console.log('Try error', error)
        return new Response(JSON.stringify({ message: 'Eroor' }));
    }
}
