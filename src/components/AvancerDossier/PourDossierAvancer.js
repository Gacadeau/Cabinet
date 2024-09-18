'use client'
import React from 'react'
import { useState,useEffect } from 'react'

const CreerAdvanceSecretaire = ({closeModal,item}) => {

    const [formAdvanceData, setFormAdvanceData] = useState({
        numero: '',
        date_audience: '',
        commentaire: '',
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleAdvanceFormChange = (e) => {
        setFormAdvanceData({
          ...formAdvanceData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleAdvanceFormSubmit = async (e) => {
        e.preventDefault();
    
        // Désactivez le bouton de soumission
        setIsSubmitting(true);
    
        try {
          const response = await fetch('/api/dossiers/avancer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_dossier: item.id,
              numero: formAdvanceData.numero,
              date_audience: formAdvanceData.date_audience,
              commentaire: formAdvanceData.commentaire,
            }),
          });
    
          if (!response.ok) {
            throw new Error('Erreur lors de la création de la Advance');
          }
    
          alert('Advance créée avec succès!');
          closeModal();
        } catch (error) {
          console.error('Error:', error);
          alert('Une erreur est survenue lors de la création de la Advance.');
        } finally {
          // Réactivez le bouton de soumission après la fin de la soumission
          setIsSubmitting(false);
        }
      };

  return (
        <div className='mx-auto w-[100%] h-[100%] sm:h-[95%] md:h-[68%] lg:h-[100%] flex lg:items-center bg-slate-700 bg-opacity-25 justify-center'>
            <form onSubmit={handleAdvanceFormSubmit} className='w-[95%] md:w-[50%] lg:w-[30%] md:h-[97%] lg:h-[97%] overflow-y-scroll mt-2 md:mt-2 mb-2 md:mb-0 relative flex flex-col space-y-4 bg-white rounded-md rounded-tr-2xl'>
            <button onClick={closeModal} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <span className='flex justify-center text-lg font-bold md:text-2xl lg:text-3xl md:font-bold text-slate-700 mt-5'>Creez une Advance</span>
            <div className='w-[78%] flex flex-col space-y-3 mx-auto'>
                <div className='flex flex-col space-y-2 w-full'>
                    <label htmlFor='numero' className='text-md md:text-xl font-medium text-slate-700'>
                    Numéro
                    </label>
                    <input
                    type='text'
                    name='numero'
                    value={formAdvanceData.numero}
                    onChange={handleAdvanceFormChange}
                    className='border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm'
                    required
                    />
                </div>
                <div className='flex flex-col space-y-2 w-full'>
                    <label htmlFor='date_audience' className='text-md md:text-xl font-medium text-slate-700'>
                    Date d'audience
                    </label>
                    <input
                    type='date'
                    name='date_audience'
                    value={formAdvanceData.date_audience}
                    onChange={handleAdvanceFormChange}
                    className='border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none'
                    required
                    />
                </div>
                <div className='flex flex-col space-y-2 w-full'>
                    <label htmlFor='commentaire' className='text-md md:text-xl font-medium text-slate-700'>
                    Commentaire
                    </label>
                    <textarea
                    id='commentaire'
                    name='commentaire'
                    value={formAdvanceData.commentaire}
                    onChange={handleAdvanceFormChange}
                    className='block p-1.5 md:p-2.5 w-full h-[10rem] md:h-[20rem] text-lg text-slate-700 rounded-lg border border-slate-700 focus:outline-none placeholder:text-slate-700 placeholder:text-sm'
                    placeholder='Écrivez les commentaires ici...'
                    ></textarea>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    type='submit'
                    className='w-[8rem] h-10 rounded-md bg-slate-700 hover:bg-slate-800 text-white font-bold mb-2 md:mb-2'
                    disabled={isSubmitting} 
                >
                    {isSubmitting ? 'En cours...' : 'CRÉER'}
                </button>
            </div>
            </form>
        </div>
  )
}

export default CreerAdvanceSecretaire
