"use client"
import { useState } from 'react'
import DossierStandards from '@/components/Dossiers/DossierStandards'
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
            <DossierStandards />
        </>
    )
}

export default page
