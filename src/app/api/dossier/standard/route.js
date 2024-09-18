import executeQuery from '@/Config/db';
export async function GET(request) {
    try {
        // const result = await executeQuery('SELECT d.* FROM dossiers d INNER JOIN grand_dossier gd ON d.id_grand = gd.id INNER JOIN client c ON gd.user = c.id WHERE c.type = ?', [1])
        const result = await executeQuery('SELECT d.* FROM dossiers d INNER JOIN grand_dossier gd ON d.id_grand = gd.id WHERE d.type = ?', [0])
        const response = result
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
