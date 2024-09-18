import React from 'react'

const EcritureSecretaire = () => {
  return (
        <div className='mx-auto w-[100%] h-auto flex items-center bg-blue-100 justify-center'>
            <div className='w-[95%] lg:w-[30%] h-[95%] mb-2 mt-2 flex flex-col space-y-3 bg-white rounded-md rounded-tr-2xl'>
                <div className='w-[78%] h-full flex flex-col space-y-2 mx-auto mt-2 mb-2'>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Destinataire</label>
                        <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm" required />
                    </div>
                    <div className='flex flex-col space-y-2 w-full'>
                        <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Date</label>
                        <input type="date" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
                    </div>
                    <div className='flex flex-col space-y-2 w-full'>
                        <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Objet</label>
                        <textarea id="message" class="block p-2.5 w-full h-[9.5rem] text-lg text-slate-700 rounded-lg border border-slate-700 focus:outline-none placeholder:text-slate-700 placeholder:text-sm" placeholder="ecris les commentaires ici..."></textarea>
                    </div>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Nunero de reference</label>
                        <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm" required />
                    </div>
                    <div className='flex justify-center'>
                        <button className='w-[8rem] h-10 rounded-md bg-slate-700 hover:bg-slate-800 text-white font-bold'>ENVOYER</button>
                    </div>
                </div>    
            </div>
        </div>
  )
}

export default EcritureSecretaire
