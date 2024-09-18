'use client'
import React from 'react'

const DetailsDossiersSecretaire = ({handleEditClick,handleCreateConsole,handleCreateMerge,handleCreatePayement,handleCreateEmergence,handleCreatePenality,handleCreateAdvanced,handleCreateReturnBack,handleShowBalance,handleDetailToutLeDossier}) => {

  return (
        <div className='bg-slate-700 w-[10rem] h-[20rem] rounded-sm'>
            <div className='w-full h-full flex flex-col'>
            <button onClick={handleDetailToutLeDossier} className='w-full text-white hover:bg-slate-600 p-1'>
                detail
            </button>
            <button onClick={handleEditClick} className='w-full text-white hover:bg-slate-600 p-1'>
                editer
            </button>
            <button onClick={handleCreatePenality}  className='w-full text-white hover:bg-slate-600 p-1'>
                creer une penalite
            </button>
            <button onClick={handleCreateEmergence}  className='w-full text-white hover:bg-slate-600 p-1'>
                creer une urgence
            </button>
            <button onClick={handleCreateConsole} className='w-full text-white hover:bg-slate-600 p-1'>
                creer un console
            </button>
            <button onClick={handleCreateMerge}  className='w-full text-white hover:bg-slate-600 p-1'>
                fusionner
            </button>
            <button onClick={handleCreatePayement}  className='w-full text-white hover:bg-slate-600 p-1'>
                payement
            </button>
            <button onClick={handleShowBalance} className='w-full text-white hover:bg-slate-600 p-1'>
                balance
            </button>
            <button onClick={handleCreateAdvanced} className='w-full text-white hover:bg-slate-600 p-1'>
                avancer
            </button>
            <button onClick={handleCreateReturnBack} className='w-full text-white hover:bg-slate-600 p-1'>
                retour en arriere
            </button>
            </div>
        </div>           
  )
}

export default DetailsDossiersSecretaire
