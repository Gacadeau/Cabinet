"use client"
import { useState } from 'react'
import TousDossiers from '@/components/Dossiers/TousDossiers'
import EditerDossierSecreatire from '@/components/Secretaire/EditerDossier/EditerDossierSecreatire'

const page = () => {
  const [showModalEditer, setShowEditer] = useState(false);

  const closeModal = () => {
    setShowEditer(false);
  }
  return (
    <>
      <div className=''>
        {
          showModalEditer ? <EditerDossierSecreatire closeModal={closeModal} /> : ""
        }
      </div>
      <TousDossiers />
    </>
  )
}

export default page
