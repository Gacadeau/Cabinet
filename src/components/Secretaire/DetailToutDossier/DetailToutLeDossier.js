'use client'
import React from 'react'
import { useState } from 'react';
import { FaRoad } from 'react-icons/fa'
import { Tooltip } from '@nextui-org/react';
import TracabiliteDossier from '../Tracabilite/TracabiliteDossier';

const DetailToutLeDossier = ({closeModal,closeModalDetail}) => {
    
    const [showTracabiliteDossier,setShowTracabliteDossier] = useState(false)

    const handleTracabiliteDossier = ()=>  {
        setShowTracabliteDossier(true);
    }

    closeModal = ()=> {
        setShowTracabliteDossier(false);
    }

  return (
    <div className="relative w-[100%]  md:w-full h-full md:h-screen  bg-slate-700 flex md:items-center bg-opacity-50 z-100">
      <div className="absolute z-100 w-full">
        {showTracabiliteDossier ? (
          <TracabiliteDossier closeModal={closeModal} />
        ) : (
          ""
        )}
      </div>
      <div className="relative  w-[98%] h-[37%] md:h-[15%] lg:h-[9.5%]  overflow-y-scroll  overflow-x-scroll mx-auto bg-white rounded-tl-md rounded-tr-xl mt-0">
        <Tooltip
          showArrow={true}
          content="tracabilite du dossier"
          className="bg-slate-700 text-white text-sm h-7 rounded-md max-w mx-1"
        >
          <button
            onClick={handleTracabiliteDossier}
            className="absolute w-[2.5rem] h-[2rem] bg-slate-200 rounded-sm hover:bg-slate-300 md:mt-0 right-[50%] md:right-[10%] lg:right-[8%]"
          >
            <FaRoad className="w-full h-full" />
          </button>
        </Tooltip>
        <button
          onClick={closeModalDetail}
          className="absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-lg text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-[100%]">
          <div className="w-full">
            <div class="container mx-auto py-2">
              <table id="example" class="table-auto w-full">
                <thead>
                  <tr>
                    <th class="text-start py-2 bg-slate-100">Numero dossier</th>
                    <th class="py-2 text-start border bg-slate-100">
                      Demandeur
                    </th>
                    <th class="text-start py-2 border bg-slate-100">
                      Defendeur
                    </th>
                    <th class="text-start py-2 border bg-slate-100">
                      Tribunal
                    </th>
                    <th class="text-start py-2 border bg-slate-100">
                      Date d&#39;audience
                    </th>
                    <th class="text-start py-2 border bg-slate-100">
                      Commentaire
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border text-start py-2">RC021</td>
                    <td class="border text-start py-2">KARENZO Arthemon</td>
                    <td class="border text-start py-2">BUKURU Josianne</td>
                    <td class="border text-start py-2">GISHIHA</td>
                    <td class="border text-start py-2">15/03/2025</td>
                    <td class="border text-start py-2">
                      Le lorem ipsum est, en imprimerie. 
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailToutLeDossier
