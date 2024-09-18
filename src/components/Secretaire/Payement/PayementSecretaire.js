'use client'
import React from 'react'

const PayementSecretaire = ({closeModal}) => {
  return (
        <div className='mx-auto w-[100%] h-[100%] sm:h-[95%] md:h-[68%] lg:h-[100%] flex lg:items-center bg-slate-700 bg-opacity-25 justify-center'>
            <div className='w-[95%] md:w-[50%] lg:w-[30%] h-[70%] md:h-[60%]  overflow-y-scroll mt-2 md:mt-2 mb-2 md:mb-0 relative flex flex-col space-y-4 bg-white rounded-md rounded-tr-2xl'>
            <button onClick={closeModal} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <span className='flex justify-center text-lg font-bold md:text-2xl lg:text-3xl md:font-bold text-slate-700 mt-5'>Payement</span>
            <div className='w-[78%] flex flex-col space-y-6 mx-auto'>
                <div className='flex flex-col space-y-2 w-full'>
                <label htmlFor="first_name" className="text-md md:text-xl font-medium text-slate-700">Montant</label>
                <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-1.5 md:p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm" required />
                </div>
            </div>
            <div className='flex justify-center'>
                <button onClick={closeModal} className='w-[8rem] h-10 rounded-md bg-slate-700 hover:bg-slate-800 text-white font-bold mb-2 md:mb-2'>VALIDER</button>
            </div>
            </div>
        </div>
  )
}

export default PayementSecretaire
