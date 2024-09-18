"use client"
import React from 'react'
import { Tooltip } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import DetailsDossiersSecretaire from '../Secretaire/DetailsDossiers/DetailsDossiersSecretaire';
import EditerDossierSecreatire from '../Secretaire/EditerDossier/EditerDossierSecreatire';
import CreerConsoleSecretaire from '../Secretaire/CreerConsole/CreerConsoleSecretaire';
import CreerFusionSecretaire from '../Secretaire/CreerFusion/CreerFusionSecretaire';
import PayementSecretaire from '../Secretaire/Payement/PayementSecretaire';
import CreerUrgenceSecretaire from '../Secretaire/CreerUrgence/CreerUrgenceSecretaire';
import CreerPenaliteSecretaire from '../Secretaire/CreerPenalite/CreerPenaliteSecretaire';
import PourDossierAvancer from '../AvancerDossier/PourDossierAvancer';
import RetourEnArriere from '../Secretaire/RetourArriere/RetourEnArriere';
import BalanceSecretaire from '../Secretaire/Balance/BalanceSecretaire';
import DetailToutLeDossier from '../Secretaire/DetailToutDossier/DetailToutLeDossier';

const DossierStandards = () => {

    const [showEditSecreatire, setShowEditSecreatire] = useState(false)
    const [showCreateConsole, setShowCreateConsole] = useState(false)
    const [showCreateMerge, setShowCreateMerge] = useState(false)
    const [showCreatePayement, setShowCreatePayement] = useState(false)
    const [showCreateEmergence, setShowCreateEmergence] = useState(false)
    const [showCreatePenality, setShowCreatePenality] = useState(false)
    const [showCreateAdvanced, setShowCreateAdvanced] = useState(false)
    const [showCreateReturnBack, setShowCreateReturnBack] = useState(false)
    const [showBalance, setShowBalance] = useState(false)
    const [showDetailToutLeDossier, setShowDetailToutLeDossier] = useState(false)
    const [data, setData] = useState([])
    const [currentItem, setCurrentItem] = useState(null);


    const openModal = (type, item) => {
        setCurrentItem(item);
        switch (type) {
            case 'edit':
                setShowEditSecreatire(true);
                break;
            case 'createConsole':
                setShowCreateConsole(true);
                break;
            case 'createMerge':
                setShowCreateMerge(true);
                break;
            case 'createPayement':
                setShowCreatePayement(true);
                break;
            case 'createEmergence':
                setShowCreateEmergence(true);
                break;
            case 'createPenality':
                setShowCreatePenality(true);
                break;
            case 'createAdvanced':
                setShowCreateAdvanced(true);
                break;
            case 'createReturnBack':
                setShowCreateReturnBack(true);
                break;
            case 'balance':
                setShowBalance(true);
                break;
            case 'detail':
                setShowDetailToutLeDossier(true);
                break;
            default:
                break;
        }
    };

    const closeModal = () => {
        setShowEditSecreatire(false)
        setShowCreateConsole(false)
        setShowCreateMerge(false)
        setShowCreatePayement(false)
        setShowCreateEmergence(false)
        setShowCreatePenality(false)
        setShowCreateAdvanced(false)
        setShowCreateReturnBack(false)
        setShowBalance(false)
    }

    const closeModalDetail = () => {
        setShowDetailToutLeDossier(false)
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/dossier/standard');
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
        <div className="w-full h-auto rounded-md">
            {showEditSecreatire ? (
                <div className="absolute h-[48%] sm:h-[50.5%] md:h-[56%] w-[95%] md:w-[100%] lg:w-[85.6%]">
                    <EditerDossierSecreatire closeModal={closeModal} item={currentItem} />
                </div>
            ) : (
                ""
            )}
            {showCreateConsole ? (
                <div className="absolute h-[48%] sm:h-[50.5%] md:h-[56%] w-[95%] md:w-[100%] lg:w-[85.6%]">
                    <CreerConsoleSecretaire closeModal={closeModal}  item={currentItem}/>
                </div>
            ) : (
                ""
            )}
            {showCreateMerge ?
                <div className="absolute h-[48%] sm:h-[50.5%] md:h-[56%] w-[95%] md:w-[100%] lg:w-[85.6%]">
                    <CreerFusionSecretaire closeModal={closeModal} item={currentItem} />
                </div>

                : ""}
            {showCreatePayement ?
                <div className="absolute h-[48%] sm:h-[50.5%] md:h-[56%] w-[95%] md:w-[100%] lg:w-[85.6%]">
                    <PayementSecretaire closeModal={closeModal} item={currentItem} />
                </div>
                : ""}
            {showCreateEmergence ? (
                <div className="absolute h-[48%] sm:h-[50.5%] md:h-[56%] w-[95%] md:w-[100%] lg:w-[85.6%]">
                    <CreerUrgenceSecretaire closeModal={closeModal} item={currentItem} />
                </div>
            ) : (
                ""
            )}
            {showCreatePenality ? (
                <div className="absolute h-[48%] sm:h-[50.5%] md:h-[56%] w-[95%] md:w-[100%] lg:w-[85.6%]">
                    <CreerPenaliteSecretaire closeModal={closeModal} item={currentItem} />
                </div>
            ) : (
                ""
            )}
            {showCreateAdvanced ?
                <div className="absolute h-[48%] sm:h-[50.5%] md:h-[56%] lg:h-[58%] w-[95%] md:w-[100%] lg:w-[85.6%] ">
                    <PourDossierAvancer closeModal={closeModal} item={currentItem} />
                </div>
                : ""}
            {showCreateReturnBack ? 
                <div className="absolute h-[48%] sm:h-[50.5%] md:h-[56%] lg:h-[58%] w-[95%] md:w-[100%] lg:w-[85.6%] ">
                    <RetourEnArriere closeModal={closeModal}  item={currentItem} />
                </div>
            : ""}
            {showBalance ?
                <div className="absolute h-[48%] sm:h-[50.5%] md:h-[56%] lg:h-[58%] w-[95%] md:w-[100%] lg:w-[85.6%] ">
                    <BalanceSecretaire closeModal={closeModal} item={currentItem} />
                </div>
                : ""}
            {showDetailToutLeDossier ? (
                <div className="absolute h-[48%] sm:h-[50.5%] md:h-[56%] lg:h-auto w-[95%] md:w-[100%] lg:w-[85.6%] md:top-0">
                    <DetailToutLeDossier closeModalDetail={closeModalDetail} item={currentItem} />
                </div>
            ) : (
                ""
            )}
            <div className="w-[100%] ">
                <div className="w-full">
                    <div class="container mx-auto py-2">
                        <table id="example" class="table-auto w-full">
                            <thead>
                                <tr>
                                    <th class="text-start py-2 bg-slate-100"></th>
                                    <th class="py-2 text-start border bg-slate-100">No</th>
                                    <th class="text-start py-2 border bg-slate-100">
                                        Numero du dossier
                                    </th>
                                    <th class="text-start py-2 border bg-slate-100">Demandeur</th>
                                    <th class="text-start py-2 border bg-slate-100">Defendeur</th>
                                    <th class="text-start py-2 border bg-slate-100">Tribunal</th>
                                    <th class="text-start py-2 border bg-slate-100">
                                        Date d&#39;audience
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item) => (
                                    <tr>
                                        <td className="border px-4 py-2 text-sm font-medium">
                                            <Tooltip
                                                showArrow={true}
                                                content={
                                                    <DetailsDossiersSecretaire
                                                        handleEditClick={() => openModal('edit', item)}
                                                        handleCreateConsole={() => openModal('createConsole', item)}
                                                        handleCreateMerge={() => openModal('createMerge', item)}
                                                        handleCreatePayement={() => openModal('createPayement', item)}
                                                        handleCreateEmergence={() => openModal('createEmergence', item)}
                                                        handleCreatePenality={() => openModal('createPenality', item)}
                                                        handleCreateAdvanced={() => openModal('createAdvanced', item)}
                                                        handleCreateReturnBack={() => openModal('createReturnBack', item)}
                                                        handleShowBalance={() => openModal('balance', item)}
                                                        handleDetailToutLeDossier={() => openModal('cdetail', item)}
                                                    />
                                                }
                                                className="bg-slate-700 h-7 rounded-md max-w"
                                            >
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center text-slate-700 bg-slate-200 rounded-md"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        className="size-8"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                                        />
                                                    </svg>
                                                </button>
                                            </Tooltip>
                                        </td>
                                        <td class="border text-start py-2">{item.id_grand}</td>
                                        <td class="border text-start py-2">{item.numero}</td>
                                        <td class="border text-start py-2">{item.demandeur}</td>
                                        <td class="border text-start py-2">{item.defendeur}</td>
                                        <td class="border text-start py-2">{item.tribunal}</td>
                                        <td class="border text-start py-2">{item.date_audience}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DossierStandards
