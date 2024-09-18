import React from 'react'

const BalanceSecretaire = ({closeModal}) => {
  return (
        <div className='mx-auto w-[100%] h-[100%] sm:h-[95%] md:h-[68%] lg:h-[100%] flex lg:items-center bg-slate-700 bg-opacity-25 justify-center rounded-tl-md rounded-tr-md'>
        <div className='w-[95%] md:w-[90%] lg:w-[70%] h-[42%] md:h-[30%] lg:h-[30%] overflow-y-scroll mt-2 md:mt-0 mb-2 md:mb-0 relative flex flex-col space-y-4 bg-white rounded-md rounded-tr-2xl'>
          <button onClick={closeModal} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-[100%]">
          <div className="w-full">
            <div class="container mx-auto py-2">
              <table id="example" class="table-auto w-full">
                <thead>
                  <tr>
                    <th class="py-2 text-start border bg-slate-100">
                      Balance
                    </th>
                    <th class="text-start py-2 border bg-slate-100">
                      Montant paye 
                    </th>
                    <th class="text-start py-2 border bg-slate-100">
                      Montant restant
                    </th>
                    <th class="text-start py-2 border bg-slate-100">
                      Date de payement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border text-start py-2">12 000 000fbu</td>
                    <td class="border text-start py-2">6 000 000fbu</td>
                    <td class="border text-start py-2">200 000fbu</td>
                    <td class="border text-start py-2">11/10/2011</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
         
        </div>
      </div>      
  )
}

export default BalanceSecretaire
