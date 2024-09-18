'use client'
import React from 'react'

const AjouterCaisseSecretaire = ({closeModal}) => {
  return (
        <div className='mx-auto w-[100%] h-full flex items-center bg-red-600  justify-center'>
            <div className='elative w-[30%] h-[80%] flex flex-col space-y-4 bg-white rounded-md rounded-tr-2xl'>
                <button onClick={closeModal} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className='w-[78%] flex flex-col space-y-3 mx-auto mt-2'>
                <div className='flex flex-col space-y-2 w-full'>
                    <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Motif</label>
                    <textarea id="message" class="block p-2.5 w-full h-[14rem] text-lg text-slate-700 rounded-lg border border-slate-700 focus:outline-none placeholder:text-slate-700 placeholder:text-sm" placeholder="ecris les commentaires ici..."></textarea>
                    </div>
                </div>
                <div className='flex flex-col space-y-1 w-[22rem] mx-auto'>
                    <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Montant</label>
                    <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm" required />
                </div>
                <div className='flex justify-center'>
                <button className='w-[8rem] h-10 rounded-md bg-slate-700 hover:bg-slate-800 text-white font-bolSd'>AJOUTER</button>
                </div>
            </div>
        </div>
  )
}

export default AjouterCaisseSecretaire
