// pages/api/dossiers/[id].js

import { executeQuery } from '../../../lib/db';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  const { numero, demandeur, defendeur, id_granddossier, date_audience, id_tribunal, montant_payer, commentaire } = req.body;

  try {
    switch (method) {
      case 'PUT':
        const result = await executeQuery({
          query: `UPDATE dossier SET numero = ?, demandeur = ?, defendeur = ?, id_granddossier = ?, date_audience = ?, id_tribunal = ?, montant_payer = ?, commentaire = ? WHERE id = ?`,
          values: [numero, demandeur, defendeur, id_granddossier, date_audience, id_tribunal, montant_payer, commentaire, id],
        });

        if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Dossier non trouvé' });
        }

        res.status(200).json({ message: 'Dossier mis à jour avec succès' });
        break;

      default:
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour du dossier:', error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du dossier' });
  }
}
