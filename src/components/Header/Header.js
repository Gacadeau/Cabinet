'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import SearchAndProfile from '../SearchProfile/SearchAndProfile';
import { FaFolderPlus } from 'react-icons/fa';
import { Tooltip } from '@nextui-org/react';
import CreerDossier from '../ModalDossier/CreerDossier';


const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [standard, setStandard] = useState(0)
  const [report, setReport] = useState(0)
  const [dossier, setDossier] = useState(0)
  const [client, setClient] = useState(0)
  const [tribunals, setTribunals] = useState([])
  const [error, setError] = useState('')


  const closeModal = () => {
    setShowModal(false);
  }

  const get_number_user = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/header/clients`)
    const res = await response.json();
    if (res.message == "Success") {
      setClient(res.data.clientsCount)
      setDossier(res.data.dossiersCount)
      setStandard(res.data.standardsCount)
      setReport(res.data.reportsCount)
    }
    else {
      setError('no data')
    }
  }
  const get_tribunal = async () => {
    const response = await fetch('/api/header/tribunal')
    const res = await response.json()
    if (res.message == "Success") {
      console.log('object', res.data)
      setTribunals(res.data)
    }
    else {
      setTribunals([])
    }

  }
  useEffect(() => {
    get_number_user()
    get_tribunal()
  }, [])

  console.log('oreal', get_number_user)

  return (
    <div className="relative h-full md:h-[30%] lg:h-[40%]  w-[100%] flex flex-col space-y-[0.5rem] md:space-y-[1.6rem] lg:space-y-[0.5rem]">
      <div className="absolute h-[95%] lg:h-[90%] w-[100%]">
        {showModal ? <CreerDossier closeModal={closeModal} /> : ""}
      </div>
      <SearchAndProfile />
      <div className="w-full h-full flex flex-col space-y-2 md:space-y-3">
        <span className="text-slate-700 font-bold text-xl md:text-2xl ml-6">
          Historique
        </span>
        <div className="w-[100%] h-auto sm:h-[28rem] lg:h-[12rem] grid grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          <div className="w-full h-[7rem] sm:w-[15rem] sm:h-[6.5rem] md:w-[18rem] md:h-[8.5rem] bg-white shadow-sm shadow-slate-700   rounded-md flex flex-col justify-center gap-y-1 md:gap-y-4 overflow-hidden text-ellipsis">
            <span className="w-full h-[18.5%]  flex justify-center text-slate-700 text-md md:text-lg font-bold">
              Tous les clients
            </span>
            <div className="p-1 w-[100%] max-h-[75%] md:max-h-[69%] text-justify mx-auto whitespace-normal line-clamp-4 overflow-hidden">
              <span className="flex justify-center text-slate-700 text-sm md:text-lg font-semibold">
                {client}
              </span>
            </div>
          </div>
          <div className="w-full h-[7rem] sm:w-[15rem] sm:h-[6.5rem] md:w-[18rem] md:h-[8.5rem] bg-white shadow-sm shadow-slate-700   rounded-md flex flex-col justify-center gap-y-1 md:gap-y-4 overflow-hidden text-ellipsis">
            <span className="w-full h-[18.5%]  flex justify-center text-slate-700 text-md md:text-lg font-bold">
              Tous les dossiers
            </span>
            <div className="p-1 w-[100%] max-h-[75%] md:max-h-[69%] text-justify mx-auto whitespace-normal line-clamp-4 overflow-hidden">
              <span className="flex justify-center text-slate-700 text-sm md:text-lg font-semibold">
                {dossier}
              </span>
            </div>
          </div>
          <div className="w-full h-[7rem] sm:w-[15rem] sm:h-[6.5rem] md:w-[18rem] md:h-[8.5rem] bg-white shadow-sm shadow-slate-700   rounded-md flex flex-col justify-center gap-y-1 md:gap-y-4 overflow-hidden text-ellipsis">
            <span className="w-full h-[18.5%]  flex justify-center text-slate-700 text-md md:text-lg font-bold">
              Dossiers standards
            </span>
            <div className="p-1 w-[100%] max-h-[75%] md:max-h-[69%] text-justify mx-auto whitespace-normal line-clamp-4 overflow-hidden">
              <span className="flex justify-center text-slate-700 text-sm md:text-lg font-semibold">
                {standard}
              </span>
            </div>
          </div>
          <div className="w-full h-[7rem] sm:w-[15rem] sm:h-[6.5rem] md:w-[18rem] md:h-[8.5rem] bg-white shadow-sm shadow-slate-700   rounded-md flex flex-col justify-center gap-y-1 md:gap-y-4 overflow-hidden text-ellipsis">
            <span className="w-full h-[18.5%]  flex justify-center text-slate-700 text-md md:text-lg font-bold">
              Rapports
            </span>
            <div className="p-1 w-[100%] max-h-[75%] md:max-h-[69%] text-justify mx-auto whitespace-normal line-clamp-4 overflow-hidden">
              <span className="flex justify-center text-slate-700 text-sm md:text-lg font-semibold">
                {report}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[97%] h-8 md:h-10 mx-auto">
        <div className="w-full h-full flex justify-between">
          <form className="h-[2.5rem] md:h-[3rem] lg:h-full w-[10rem] md:w-[14.5rem]">
            <select
              id="categories"
              className="rounded-md block w-full h-full p-2.5 bg-slate-700 text-white"
            >
              {tribunals.map((tribunal) => (
                <option key={tribunal.id} value={tribunal.nom}>
                  {tribunal.nom}
                </option>
              ))}

            </select>
          </form>
          <Tooltip
            showArrow={true}
            content="nouveau dossier"
            className="bg-slate-700 text-white text-sm h-7 rounded-md max-w mx-1"
          >
            <button
              onClick={() => setShowModal(true)}
              className="max-w bg-slate-700 hover:bg-slate-800 rounded-md"
            >
              <span className="flex  items-center mx-3 md:mx-4 text-md md:text-xl">
                <FaFolderPlus className="text-white" />
              </span>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
export default Header


