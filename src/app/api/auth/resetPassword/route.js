import executeQuery from "@/Config/db";
import bcrypt from 'bcryptjs/dist/bcrypt';

export async function PUT(request) {
    if (request.method === 'PUT') {
        const data = await request.json()
        const email = data.mail
        const password = data.password
        const saltrounds = 10
        const salt = await bcrypt.genSalt(saltrounds)
        const hashedPassword = await bcrypt.hash(password, salt)
        const mail = email.mail
        const resul = await executeQuery(`UPDATE users SET passcode=? WHERE users.email =?`, [hashedPassword, mail])
        if (resul.changedRows == 1) {
            return new Response(JSON.stringify({ message: 'Changement de mot de passe réussi', res: 'updated' }));
        }
        else if (!mail) {
            return new Response(JSON.stringify({ message: 'Changement de mot de passe échoué, Cliquez d\'abord sur le lien envoyé dans ton mail pour réessayer', res: 'notUpdated' }));
        }
        else {
            console.log('res', resul.changedRows);
            return new Response(JSON.stringify({ message: 'Password not reseted', res: 'notUpdated' }));
        }
    }


}