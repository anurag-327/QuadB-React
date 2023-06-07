import React from 'react'
import { useState } from 'react';
import { FilmSlate } from 'phosphor-react';
import {X,List} from "phosphor-react"
export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full fixed z-50  bg-gray-800 shadow p-2">
        <div className="justify-between px-4 mx-auto   md:items-center sm:flex-col flex ">
          <div className='relative'>
            <div className='flex gap-3 sm:absolute sm:right-2 sm:top-2 justify-center items-center'>
            <FilmSlate size={32} color="#e6e6ea" weight="bold" />
            <span className='text-2xl font-extrabold '>TVMaze</span>
            </div>
            <div className="items-center justify-between py-3 md:py-5 hidden sm:flex">
            
              <div className=" ">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X size={20} color="#ffffff" />
                  ) : (
                    <List size={20} color="#ffffff" />
                    
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex  justify-end sm:justify-center items-end md:block xl:block lg:block 2xl:block ${navbar?"block":"hidden"}`}
            >
              <ul className="items-center sm:w-full flex sm:flex-col  text-center  justify-center  gap-5 sm:gap-2 ">
                <li className="bg-pink-300 sm:w-full text-black px-2 py-1 rounded-md">
                  <a href="/">
                    Home
                  </a>
                </li>
                <li className="bg-pink-300 sm:w-full text-black px-2 py-1 rounded-md">
                  <a href="/">
                    Services
                  </a>
                </li>
                <li className="bg-pink-300 sm:w-full text-black px-2 py-1 rounded-md">
                  <a href="/">
                    Shows
                  </a>
                </li>
               
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  );
}