import executeQuery from "@/Config/db";
import { transporter } from "@/Config/Email";

export async function POST(request) {


  async function checkEmailExist(email) {
    // Vérifier si l'email est unique dans la base de données
    try {
      // Exécuter la requête SQL pour récupérer les videos
      const rows = await executeQuery(`SELECT * FROM users WHERE email=? `, [email]);

      // Retourner true si l'email est unique, false sinon
      let mess = ""
      console.log('user0:', rows)
      if (rows[0] == null) {
        mess = "false"
        console.log("2:MAil n'existe pas")
        return mess
      }
      else {
        mess = "true"
        console.log('user:', rows[0])
        console.log("1:MAil existe")
        return mess
      }
    } catch (error) {
      console.log('error in sql for checking Mail', error)
    }
  }
  try {
    const data = await request.json();
    const userMail = data.email
    const isExist = await checkEmailExist(userMail);
    if (isExist == "false") {
      return new Response(JSON.stringify({ data: 'errorMail', message: "Erreur email n\'existe pas.", error: 'Email n\'existe pas.' }));
    }
    else {
      //Envoie d'Email pour la validation du compte
      const mailOptions = {
        from: 'teramaflix@gmail.com',
        to: userMail,
        subject: 'Changement de mot de Passe dans BNM',
        html: `
                <html>
                  <head>
                    <style>
                      body {
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        color: black;
                        line-height: 1.5;
                      }
                      
                      .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                      }
                      
                      .header {
                        color:black;
                        margin-bottom: 20px;
                      }
                      
                      .button {
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #3a86ff;
                        color: white;
                        text-decoration: none;
                        border-radius: 4px;
                        font-size: 16px;
                        border: none;
                        cursor: pointer;
                      }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      <div class="header">
                      <h2>Changement de mot de Passe</h2>
                      <p>Bonjour,</p>
                      <p>Vous souhaitez modifier votre mot de passe du compte ${userMail}?</p>
                      <p>C'est une excellente initiative pour renforcer la sécurité de votre compte.</p>
                      <p>Pour procéder à cette modification, veuillez cliquer sur le bouton en dessous :</p>
                      </div>
                      <div class="button" style="text-decoration: none; color: white; ">
                        <a href="${process.env.NEXT_PUBLIC_URL}/authentication/resetPassword?mail=${userMail}" style="text-decoration: none; color: white;">
                        Clique ici
                        </a>
                      </div>
                    </div>
                  </body>
                </html>
               `,
        //   attachments: [
        //       {
        //           filename: 'TeramaFlix -logo.jpg',
        //           path: 'public/logo/TeramaFlix -logo.jpg',
        //           cid: 'unique@image'
        //       }
        //   ]
      };
      console.log('mail', userMail)
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          return new Response(JSON.stringify({ data: error, message: 'Error dans l\'envoi d\'email' }));
        } else {
          console.log('E-mail envoyé: ' + info.response);
        }
      });

      // Renvoyer les résultats de la requête sous forme de réponse JSON
      return new Response(JSON.stringify({ message: 'Success' }))

    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ data: error, message: 'Erreur dans la soumission d\'email' }));
  }
}
