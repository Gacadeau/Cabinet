'use client'
import React, { useState, useEffect } from 'react';

const EditerDossierSecretaire = ({ closeModal, item }) => {
  const [numero, setNumero] = useState('');
  const [demandeur, setDemandeur] = useState('');
  const [defendeur, setDefendeur] = useState('');
  const [dateAudience, setDateAudience] = useState('');
  const [montantPayer, setMontantPayer] = useState('');
  const [tribunal, setTribunal] = useState('');
  const [tribunalName, setTribunalName] = useState('');
  const [idGrand, setIdGrand] = useState(null);

  useEffect(() => {
    if (item) {
      setNumero(item.numero || '');
      setDemandeur(item.demandeur || '');
      setDefendeur(item.defendeur || '');
      setTribunal(item.tribunal || ''); 
      setDateAudience(item.date_audience ? new Date(item.date_audience).toISOString().split('T')[0] : '');
      setMontantPayer(item.montant_payer || '');

      const fetchTribunalName = async () => {
        try {
          const response = await fetch(`/api/tribunal/${item.tribunal}`);
          if (!response.ok) throw new Error('Erreur de récupération du tribunal');
          const data = await response.json();
          setTribunalName(data.nom || '');
        } catch (error) {
          console.error('Erreur lors de la récupération du tribunal:', error);
        }
      };

      const fetchIdgrand = async () => {
        try {
          const response = await fetch(`/api/grand_dossier/${item.id}`);
          if (!response.ok) throw new Error("Erreur de récupération de l'id_grand");
          const data = await response.json();
          setIdGrand(data.id_grand);  
          fetchPrix(data.id_grand);
        } catch (error) {
          console.error('Erreur lors de la récupération de id:', error);
        }
      };

      const fetchPrix = async (id_grand) => {
        try {
          const response = await fetch(`/api/caisse/${id_grand}`);
          if (!response.ok) throw new Error('Erreur de récupération du prix');
          const data = await response.json();
          setMontantPayer(data.montant || ''); 
        } catch (error) {
          console.error('Erreur lors de la récupération du prix:', error);
        }
      };

      fetchTribunalName();
      fetchIdgrand();
    }
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedDossier = {
      numero,
      demandeur,
      defendeur,
      id_tribunal: tribunal,
      date_audience: dateAudience,
      montant_payer: montantPayer,
    };

    try {

      // Mettre à jour les informations dans la table tribunal
   const resTribunal = await fetch(`/api/tribunal/${item.tribunal}`, {
     method: 'PUT',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ nom: tribunal }),
   });
   const tribunal = await resTribunal.json();
   const tribunalId = tribunal.id;

    // Mettre à jour les informations dans la table grand_dossier
    const resGrandDossier = await fetch(`/api/grand_dossier/${idGrand}`, {
     method: 'PUT',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ montant:montantPayer }),
   });
   const grandDossier = await resGrandDossier.json(); 
   const grandDossierId = grandDossier.id;

   // Mettre à jour les informations dans la table dossiers
   const result = await fetch(`/api/dossiers/${item.id}`, {
   method: 'PUT',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({
     numero: numero,
     demandeur: demandeur,
     defendeur: defendeur,
     id_granddossier: Number(grandDossierId),
     date_audience: dateAudience,
     id_tribunal: Number(tribunalId),
     commentaire: commentaire,
   }),
 });
 
 const res = await fetch('/api/dossiers');
 const data = await res.json();

 } catch (error) {
   alert('Une erreur est survenue lors de la mise a jour du dossier.');
 }

  };

  return (
    <div className='mx-auto w-[100%] h-[100%] sm:h-[95%] md:h-[68%] lg:h-[100%] flex lg:items-center bg-slate-700 bg-opacity-25 justify-center'>
      <div className='w-[95%] md:w-[50%] lg:w-[30%] md:h-[80%] lg:h-[97%] overflow-y-scroll mt-2 md:mt-0 mb-2 md:mb-0 relative flex flex-col space-y-4 bg-white rounded-md rounded-tr-2xl'>
        <button onClick={closeModal} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <span className='flex justify-center text-lg font-bold md:text-2xl lg:text-3xl md:font-bold text-slate-700 mt-5'>Modifier un dossier</span>
        <form className='w-[78%] flex flex-col space-y-2 md:space-y-3 mx-auto' onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-1 md:space-y-2 w-full'>
            <label htmlFor="numero" className="text-md md:text-xl font-medium text-slate-700">Numero Du Dossier</label>
            <input
              type="text"
              id="numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              className="border border-slate-700 text-slate-700 text-md md:text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm"
              required
            />
          </div>
          <div className='flex flex-col space-y-1 md:space-y-2 w-full'>
            <label htmlFor="demandeur" className="text-md md:text-xl font-medium text-slate-700">Demandeur</label>
            <input
              type="text"
              id="demandeur"
              value={demandeur}
              onChange={(e) => setDemandeur(e.target.value)}
              className="border border-slate-700 text-slate-700 text-md md:text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm"
              required
            />
          </div>
          <div className='flex flex-col space-y-1 md:space-y-2 w-full'>
            <label htmlFor="defendeur" className="text-md md:text-xl font-medium text-slate-700">Defendeur</label>
            <input
              type="text"
              id="defendeur"
              value={defendeur}
              onChange={(e) => setDefendeur(e.target.value)}
              className="border border-slate-700 text-slate-700 text-md md:text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm"
              required
            />
          </div>
          <div className='flex flex-col space-y-1 md:space-y-2 w-full'>
            <label htmlFor="tribunalName" className="text-md md:text-xl font-medium text-slate-700">Tribunal</label>
            <input
              type="text"
              id="tribunalName"
              value={tribunalName}
              onChange={(e) => setTribunalName(e.target.value)} 
              className="border border-slate-700 text-slate-700 text-md md:text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm"
              required
            />
          </div>
          <div className='flex flex-col space-y-1 md:space-y-2 w-full'>
            <label htmlFor="date_audience" className="text-md md:text-xl font-medium text-slate-700">Date d'audience</label>
            <input
              type="date"
              id="date_audience"
              value={dateAudience}
              onChange={(e) => setDateAudience(e.target.value)}
              className="border border-slate-700 text-slate-700 text-md md:text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm"
              required
            />
          </div>
          <div className='flex flex-col space-y-1 md:space-y-2 w-full'>
            <label htmlFor="montant_payer" className="text-md md:text-xl font-medium text-slate-700">Montant a payer</label>
            <input
              type="text"
              id="montant_payer"
              value={montantPayer}
              onChange={(e) => setMontantPayer(e.target.value)}
              className="border border-slate-700 text-slate-700 text-md md:text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm"
              required
            />
          </div>
          <div className='flex justify-center'>
            <button type="submit" className='w-[8rem] h-10 rounded-md bg-slate-700 hover:bg-slate-800 text-white'>
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditerDossierSecretaire;
