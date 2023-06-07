import { PlayCircle } from 'phosphor-react';
import React, { useEffect, useState } from 'react'
import { useParams,useSearchParams } from 'react-router-dom'
import MovieDetails from '../components/MovieDetails';
import NetworkDetails from '../components/NetworkDetails';
import Loader from '../components/loader';
const Show = () => {
  const params=useParams();
  const [show,setShow]=useState();
  const [loading,setLoading]=useState(true);
  useEffect(() =>
  {
      (async function()
      {
           const response=await fetch(`https://api.tvmaze.com/shows/${params.id}`);
           const data=await response.json();
           if(response.status===200)
           {
              setShow(data);
              setLoading(false);
           }
      }())
  },[])

  return ( 
    <>
      {
          loading?<div className="w-screen h-screen flex flex-col gap-1 justify-center items-center"><Loader /><p className=''>Please wait while we get data</p></div>:(
            <div className='flex gap-10  flex-col mb-10 w-[75vw] sm:w-[90vw]  bg-gradient-to-t from-gray-800 to-gray-950  border-l-4 border-r-4 border-yellow-300 p-4 sm:p-1 mx-auto '>
            <h2 className='text-5xl hidden mt-20 sm:block sm:text-3xl font-extrabold ml-5'>{show.name}</h2>  
              <div className='flex sm:flex-col w-full mx-auto mt-20 sm:mt-0 gap-10 justify-between'>
                <div className='w-[50%] sm:w-full relative group  rounded-md overflow-hidden'>
                  <a href={`https://www.tvmaze.com/shows/${params.id}/${show.name}`}>
                     <img className='w-full rounded-md group-hover:scale-125 group-hover:opacity-40  transform translate duration-500' src={show.image.original} alt={show.name} />
                  </a>
                    <PlayCircle className='absolute hidden group-hover:block top-[50%] bottom-[50%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]' size={150} color="#e6e6ea" weight="bold" />
                </div>
                  <div className='flex flex-col w-[50%] sm:w-full sm:border-0 rounded-sm gap-2 px-7 py-2'>
                      <h2 className='text-7xl bg-gradient-to-r from-blue-300 to-pink-600 bg-clip-text text-transparent sm:hidden visible sm:text-3xl font-extrabold'>{show.name}</h2>  
                      <span className='mt-5 text-3xl font-serif font-bold'>Summary</span>
                      <p className='text-yellow-200 text-xl  text-justify' dangerouslySetInnerHTML={{ __html: show.summary }} /> 
                      <div className='flex gap-3  mt-4 item-center'>
                        <span className='font-bold text-2xl'>Genre :-</span>
                        {
                          show.genres.map((data,index) => <span className='px-3 font-semibold py-1 bg-orange-200 text-black rounded-md' key={index}>{data}</span>)
                        }
                      </div>
                      <a href={`https://www.tvmaze.com/shows/${params.id}/${show.name}`} className='bg-gradient-to-r mt-5 p-2 w-[40%] text-center mx-auto sm:w-[50%] text-black text-3xl font-semibold rounded-md from-blue-300 to-gray-300'>Watch</a>
                  </div>
              </div>
              <hr className='w-full h-[2px] bg-gray-600 border-2 rounded-md'></hr>
              <MovieDetails show={show} />
              <a href={`https://www.tvmaze.com/shows/${params.id}/${show.name}`} className='bg-gradient-to-r p-2 w-[30%] text-center mx-auto sm:w-[50%] text-black text-3xl font-semibold rounded-md from-orange-200 to-gray-300'>Watch</a>
              <NetworkDetails show={show} />
            </div>
          )
      }
    </>
    
  )
}

export default Show