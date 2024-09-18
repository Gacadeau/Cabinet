'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

import AjouterCaisseSecretaire from '../AjouterCaisse/AjouterCaisseSecretaire'

const CaisseSecretaire = () => {

    const [showAjouterCaisse, setShowAjouterCaisse] = useState(false);
    const [data, setData] = useState([])

    const handleAjouterCaisse = () => {
        setShowAjouterCaisse(true);
    }

    const closeModal = () => {
        setShowAjouterCaisse(false);
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/secretaire/petitecaisse');
            const data = await res.json()
            if (data.message == 'Success') {
                setData(data.data)
            }
            else {
                setData([])
            }

        };

        fetchData();

    }, []);
    return (
        <div className="w-[100%]">
            <div className="w-full">
                <div class="container mx-auto py-2">
                    <table id="example" class="table-auto w-full">
                        <thead className="relative">
                            <button className="absolute right-0 mt-0">
                                <FaPlusCircle className="font-bold text-xl md:text-2xl text-slate-700 hover:text-slate-800" />
                            </button>
                            <tr>
                                <th class="text-start py-2 bg-slate-100">Date</th>
                                <th class="py-2 text-start border bg-slate-100">Motif</th>
                                <th class="text-start py-2 border bg-slate-100">Montant</th>
                                <th class="text-start py-2 border bg-slate-100">Caisse</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item) => (
                                <tr>
                                    <td class="border text-start py-2">{item.create_at}</td>
                                    <td class="border text-start py-2">{item.Motif}</td>
                                    <td class="border text-start py-2">{item.montant}</td>
                                    <td class="border text-start py-2">{item.montant_restant}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CaisseSecretaire
