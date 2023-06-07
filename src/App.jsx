import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Shows from './components/Shows';
import Loader from "./components/loader"
function App() {
  const [shows,setShows]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() =>
  {
      (async function()
      {
           const response=await fetch("https://api.tvmaze.com/search/shows?q=all");
           const data=await response.json();
           if(response.status===200)
           {
              setShows(data);
              setLoading(false);
           }
      }())
  },[])

  return (
    <>
    {
      loading?<div className="w-screen h-screen flex flex-col gap-1 justify-center items-center"><Loader /><p className=''>Please wait while we get data</p></div>:(
      <div className=' flex flex-col gap-1 mb-10 text-white justify-center items-center'>
         <Banner shows={shows} /> 
         <Shows shows={shows} />    
      </div>)
    }   
    </>
  )
}

export default App
