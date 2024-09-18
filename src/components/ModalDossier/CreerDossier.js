'use client'
import { React, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreerDossier({ closeModal }) {
  // const [tribunals, setTribunals] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    numero: '',
    demandeur: '',
    defendeur: '',
    tribunal: '',
    date_audience: '',
    montant_a_payer: '',
    paiement_unique: 'non', 
    commentaire: '',
  });

  const [errors, setErrors] = useState({
    numero: '',
    demandeur: '',
    defendeur: '',
    tribunal: '',
    date_audience: '',
    montant_a_payer: '',
    commentaire: '',
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.demandeur) newErrors.demandeur = 'Le demandeur est requis.';
    if (!formData.defendeur) newErrors.defendeur = 'Le défendeur est requis.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

     setIsSubmitting(true);
    if (!validateForm()) return;

    try {
      // Créer un tribunal
      const resTribunal = await fetch('/api/tribunal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom: formData.tribunal }),
      });

      if (!resTribunal.ok) throw new Error('Failed to create tribunal');
      
      const tribunal = await resTribunal.json();
      const tribunalId = tribunal.id;

      // Créer un grand dossier
      const grandDossierMontant = formData.paiement_unique === 'oui' ? 1 : 0;
      const resGrandDossier = await fetch('/api/grand_dossier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ montant: grandDossierMontant }),
      });

      if (!resGrandDossier.ok) throw new Error('Failed to create grand dossier');
      
      const grandDossier = await resGrandDossier.json();
      const grandDossierId = grandDossier.id;

      // Créer un enregistrement dans la caisse
      const resCaisse = await fetch('/api/caisse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ montant: formData.montant_a_payer,id_granddossier: grandDossierId }),
      });

      if (!resCaisse.ok) throw new Error('Failed to create caisse entry');
      
      // Créer un dossier
      const resDossier = await fetch('/api/dossiers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          numero: formData.numero,
          demandeur: formData.demandeur,
          defendeur: formData.defendeur,
          id_granddossier: grandDossierId,
          date_audience: formData.date_audience,
          id_tribunal: tribunalId,
          commentaire: formData.commentaire,
        }),
      });

      if (!resDossier.ok) throw new Error('Failed to create dossier');
      
      // Mettre à jour la liste des dossiers
      // const updatedDossiers = await resDossier.json();
      // setDossiers(updatedDossiers);

      // Fermer la modal
      closeModal();


      // Réinitialiser le formulaire
      setFormData({
        numero: '',
        demandeur: '',
        defendeur: '',
        tribunal: '',
        date_audience: '',
        montant_a_payer: '',
        paiement_unique: 'non', 
        commentaire: '',
      });

      toast.success('Dossier ajouté avec succès!');
      closeModal();

    } catch (error) {
      toast.error('Erreur lors de l\'ajout du dossier.');
      console.log('error:',error)
    }
  };

  // const get_tribunal = async () => {
  //   const response = await fetch('/api/header/tribunal')
  //   const res = await response.json()
  //   if (res.message == "Success") {
  //     console.log('object', res.data)
  //     setTribunals(res.data)
  //   }
  //   else {
  //     setTribunals([])
  //   }

  // }
  // useEffect(() => {
  //   get_tribunal()
  // }, [])
  return (
    <div className='mx-auto w-[100%] h-[100%] flex items-center bg-slate-700 bg-opacity-25 justify-center z-100'>
      <form onSubmit={handleFormSubmit}className='w-[100%] lg:w-[30%] h-[84.8%] md:h-[75%] lg:h-[100%] relative overflow-y-scroll flex flex-col lg:space-y-5 bg-white rounded-md rounded-tr-2xl'>
        <button onClick={closeModal} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <span className='flex justify-center text-lg font-bold md:text-2xl lg:text-3xl md:font-bold text-slate-700 mt-5'>Creez un nouveau dossier</span>
        <div className='w-[90%] lg:w-[78%] flex flex-col space-y-1 mx-auto'>
          <div className='flex flex-col space-y-1 w-full'>
            <label htmlFor="first_name" className=" text-md md:text-xl font-medium text-slate-700">Numero Du Dossier</label>
            <input type="text" value={formData.numero} name='numero' onChange={handleFormChange} className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm"/>
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className=" text-md md:text-xl font-medium text-slate-700">Demandeur</label>
            <input type="text" name='demandeur' value={formData.demandeur} onChange={handleFormChange} className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none"/>
            {errors.demandeur && <span className="text-red-500">{errors.demandeur}</span>}
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className=" text-md md:text-xl font-medium text-slate-700">Defendeur</label>
            <input type="text" name='defendeur' value={formData.defendeur} onChange={handleFormChange} className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none"/>
            {errors.defendeur && <span className="text-red-500">{errors.defendeur}</span>}
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className=" text-md md:text-xl font-medium text-slate-700">Tribunal</label>
            <input type="text" name='tribunal' value={formData.tribunal} onChange={handleFormChange} className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none" />
          </div>
          
          {/* <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className=" text-md md:text-xl font-medium text-slate-700">Tribunal</label>
            <select
              id="categories"
              className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none" required >
              {tribunals.map((tribunal) => (
                <option key={tribunal.id} value={tribunal.nom}>
                  {tribunal.nom}
                </option>
              ))}
            </select> */}

            {/* <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none" required /> */}
          {/* </div> */}
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className=" text-md md:text-xl font-medium text-slate-700">Date d'audience</label>
            <input type="date" name='date_audience' value={formData.date_audience} onChange={handleFormChange} className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className=" text-md md:text-xl font-medium text-slate-700">Montant a payer</label>
            <input type="text" name='montant_a_payer' value={formData.montant_a_payer} onChange={handleFormChange} className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className=" text-md md:text-xl font-medium text-slate-700">Commentaire</label>
            <textarea id="message" name='commentaire' value={formData.commentaire} onChange={handleFormChange} class="block p-1.5 md:p-2.5 w-full h-[5rem] text-lg text-slate-700 rounded-lg border border-slate-700 focus:outline-none placeholder:text-slate-700 placeholder:text-sm" placeholder="ecris les commentaires ici..."></textarea>
          </div>
        </div>
        <div className='w-[50%] mx-auto flex justify-between place-items-center justify-content-center'>
          <div className=''>
            <span className='text-xl font-medium text-slate-700'>Suivi</span>
          </div>
          <div class="flex ">
            <div class="flex items-center w-[50%]">
              <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="Oui">
                <input type="radio" id="oui" value="oui" checked={formData.paiement_unique === 'oui'} onChange={handleFormChange} name="paiement_unique"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-700 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                   />
                <span
                  class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label class="mt-px text-xl font-medium text-slate-700 cursor-pointer select-none" htmlFor="Oui">
                Oui
              </label>
            </div>
            <div class="flex items-center w-[50%]">
              <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="Non">
                <input type="radio" id="non" value="non" checked={formData.paiement_unique === 'non'} onChange={handleFormChange} name="paiement_unique"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-700 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                 />
                <span
                  class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label class="mt-px text-xl font-medium text-slate-700 cursor-pointer select-none" htmlFor="Non">
                Non
              </label>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button  type="submit" className='w-[8rem] h-10 rounded-md bg-slate-700 hover:bg-slate-800 text-white font-bold mb-2 md:mb-2'
           disabled={isSubmitting} 
           >
          {isSubmitting ? 'En cours...' : 'CRÉER'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreerDossier
