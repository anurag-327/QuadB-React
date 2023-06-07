import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Star,Play,PlayCircle } from 'phosphor-react';
const Banner = ({shows}) => {
    const navigation=useNavigate();
    const [show,setShow]=useState();
    useEffect(() =>
    {
        const min=0;
        const max=shows.length-1;
        const random=Math.floor(Math.random() * (max - min + 1) + min)
        setShow(shows[random]);
    },[])

  return (
    <div className='mt-20 w-[90vw] rounded-md relative group overflow-hidden h-[70vh] mx-auto'>
        {
            show!=undefined&&(<a href={`/show/${show.show.id}`}><img src={show.show.image.original} className=' group-hover:scale-125 rounded-md transform translate duration-500 group-hover:opacity-30 object-cover w-full h-full opacity-70 mx-auto '  alt="bannerImage" />
            
            <div className='absolute bottom-10 bg-[#333] p-2 rounded-md bg-opacity-40 left-16 flex flex-col justify-start items-center'>
            <span className='text-5xl font-extrabold mb-4 '>{show.show.name}</span>
                {
                  show.show.rating.average!=null&& <span className='text-white p-2 text-center font-bold flex justify-center items-center gap-3  '> <Star className='' size={26} color="#4bbe3c" weight="fill" />{show.show.rating.average}/10</span>  
                }
                <button onClick={() => nav} className='bg-pink-600 p-2 font-bold text-white  w-28 rounded-lg hover:bg-pink-400 flex justify-center items-center gap-3  '> <Play size={20} color="#ffffff" className='inline' weight="fill" />Details</button>
                <div className='flex font-semibold text-sm text-gray-300'>
                {
                    show.show.genres.map((data,index) => <span key={index}>{data},</span> )
                }
                </div>      
            </div>
              <PlayCircle className='absolute group-hover:block hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' size={100} fill="#ffffff" weight='fill'/>
            </a>)
        }
        
    </div>
  )
}

export default Banner