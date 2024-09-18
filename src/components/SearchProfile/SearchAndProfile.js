import React from 'react'
import Image from 'next/image'

const SearchAndProfile = () => {
  return (
    <div className="h-[4rem]  md:h-[4.5rem] w-full">
      <div className="h-full w-[100%] md:w-[95%] flex justify-between items-center mx-auto mt-0">
        <div class="relative h-full w-[14rem] w-[20.5rem] lg:w-[24.5rem] -mt-3 md:mt-3 z-10">
          <div class="absolute mt-3 md:-mt-7 md:-inset-y-6 lg:inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <div className="relative w-[15rem] md:w-full">
            <input
              type="search"
              id="default-search"
              class="block h-10 w-[15rem] md:w-full p-4 ps-10 text-md text-slate-700 text-md border  rounded-lg focus:outline-none  dark:border-slate-700 dark:placeholder-gray-400"
              placeholder="Search here..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2 bottom-2 h-6 bg-slate-700 hover:bg-slate-800 focus:ring-4 ring-blue-100 font-medium rounded-lg text-sm px-2 md:px-6 lg:px-4"
            >
              Search
            </button>
          </div>
        </div>
        <div className="h-[3rem] w-[3rem] sm:h-[3.5rem] sm:w-[3.5rem] md:h-[4.2rem] md:w-[4.2rem] rounded-full border">
          <Image
            src="/Images/marteau.jpg"
            width={500}
            height={500}
            alt="profile picture"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchAndProfile
