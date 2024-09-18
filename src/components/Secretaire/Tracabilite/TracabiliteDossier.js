'use client'
import React from 'react'

const TracabiliteDossier = ({closeModal}) => {
  return (
    <div className="mx-0 md:mx-auto w-[100%] h-[60%] md:h-screen flex md:items-center bg-slate-700 bg-opacity-25 justify-center">
      <div className="relative  overflow-x-scroll w-[98%]  md:w-[90%] lg:w-[98%] h-[20%] md:h-[15%] bg-white rounded-tl-md rounded-tr-xl border border-slate-700">
        <button
          onClick={closeModal}
          className="absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0 mt-1"
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
        <div className="flex flex-col w-full">
          <span className="text-slate-700 text-xl font-bold mx-auto underline mt-2 mb-2">
            Tracabilite Du Dossier
          </span>
          <div className="w-[100%]">
            <div className="w-full">
              <div class="container mx-auto py-2">
                <table id="example" class="table-auto w-full">
                  <thead>
                    <tr>
                      <th class="text-start py-2 bg-slate-100">
                        Numero dossier
                      </th>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border text-start py-2">RC021</td>
                      <td class="border text-start py-2">KARENZO Arthemon</td>
                      <td class="border text-start py-2">BUKURU Josianne</td>
                      <td class="border text-start py-2">GISHIHA</td>
                      <td class="border text-start py-2">15/03/2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TracabiliteDossier
