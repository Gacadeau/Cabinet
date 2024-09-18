import executeQuery from '@/Config/db';
export async function GET(request) {
    try {
        const result = await executeQuery('SELECT * FROM petite_caisse', [])

        const response = result
        if (response) {
            console.log('object', response)
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
