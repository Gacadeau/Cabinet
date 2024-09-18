'use client'
import { React, useState } from "react";
import TousDossiers from '@/components/Dossiers/TousDossiers'
import EditerDossierSecreatire from '@/components/Secretaire/EditerDossier/EditerDossierSecreatire'

export default function Home() {
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
  );
}
