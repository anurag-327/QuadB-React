import React from 'react'
import KeyValue from './KeyValue'

const MovieDetails = ({show}) => {
  return (
    <div className='mt-3 flex flex-col gap-2 ml-20 sm:ml-5'>
        <h2 className='text-5xl font-bold bg-gradient-to-r mb-5 from-blue-400 to-pink-400 bg-clip-text text-transparent'>Show Info/Details</h2>
        <KeyValue name="Name" value={show.name} />
        <KeyValue name="Language" value={show.language} />
        <KeyValue name="type" value={show.type} />
        <div className='flex gap-3  item-center'>
            <span className='font-semibold text-xl'>Genre:-</span>
            {
                show.genres.map((data,index) => <span className=' font-semibold text-xl' key={index}>{data}</span>)
            }
        </div>
        <KeyValue name="Runtime" value={show.runtime}/>
        <KeyValue name="Premiered On" value={show.premiered} />
        {
              show.rating.average!=null&&( <div className='flex gap-3  item-center'>
              <h2 className='font-semibold text-xl'>Rating:</h2>
             
              <span className='text-xl'>{show.rating.average}/10</span>
          </div>)
        }
       
    </div>
  )
}

export default MovieDetails