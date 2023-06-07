import React from 'react'
import { PlayCircle } from 'phosphor-react'
const Show = ({data}) => {
  return (
    <a href={`/show/${data.show.id}`} >
      <div className='border-2 relative w-[250px] group h-[350px] border-orange-400 rounded-lg overflow-hidden'>
        <img src={data.show.image.medium} className=' w-full  h-[80%] group-hover:scale-150 group-hover:opacity-30 translate transition duration-500' alt={data.show.name} /> 
        <h3 className='text-center z-50 font-semibold text-lg'>{data.show.name}</h3>
        {
          data.show.rating.average?<h3 className='text-center z-50 font-semibold text-lg'>Ratings:-{data.show.rating.average}/10</h3>:<h3 className='text-center z-50 font-semibold text-lg'>Ratings:-N/A</h3>
        }
        
        <button className='absolute left-[50%] translate-y-[-50%] hidden group-hover:block top-[50%] translate-x-[-50%] duration-1000  z-10'><PlayCircle size={100} color="#e6e6ea" weight="bold" /></button>
      </div>
    </a>
    
  )
}

export default Show