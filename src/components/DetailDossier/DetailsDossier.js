'use client'
import React from 'react'
import { useState } from 'react'

const DetailsDossier = () => {

  return (
    <div className='bg-slate-700 w-[10rem] h-[18rem] rounded-sm'>
      <div className='w-full h-full flex flex-col'>
        <button className='w-full text-white hover:bg-slate-600 p-1'>
            editer
        </button>
        <div className='w-full text-white hover:bg-slate-600 p-1'>
            creer une penalite
        </div>
        <div className='w-full text-white hover:bg-slate-600 p-1'>
            creer une urgence
        </div>
        <div className='w-full text-white hover:bg-slate-600 p-1'>
            creer un console
        </div>
        <div className='w-full text-white hover:bg-slate-600 p-1'>
            fusionner
        </div>
        <div className='w-full text-white hover:bg-slate-600 p-1'>
            payement
        </div>
        <div className='w-full text-white hover:bg-slate-600 p-1'>
            balance
        </div>
        <div className='w-full text-white hover:bg-slate-600 p-1'>
            avancer
        </div>
        <div className='w-full text-white hover:bg-slate-600 p-1'>
            retour en arriere
        </div>
      </div>
    </div>
  )
}

export default DetailsDossier
