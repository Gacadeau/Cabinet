"use client"
import { useState } from 'react'
import DossierStructures from '@/components/Dossiers/DossierStructures'
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
            <DossierStructures />
        </>
    )
}

export default page
