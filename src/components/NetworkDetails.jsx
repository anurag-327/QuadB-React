import React from 'react'
import KeyValue from './KeyValue'

const NetworkDetails = ({show}) => {
  return (
    <>
       {
        show.network!=null&&(<div className='mt-3 flex flex-col gap-2 ml-20 sm:ml-5'>
        <h2 className='text-5xl font-bold bg-gradient-to-r mb-5 from-blue-400 to-pink-400 bg-clip-text text-transparent'>Network details</h2>
        <KeyValue name="Channel Name" value={show.network.name} />
        <KeyValue name="Country" value={show.network.country.name} />
        <KeyValue name="Country code" value={show.network.country.code} />
        <KeyValue name="Time Zone" value={show.network.country.timezone} />
        <div className='flex gap-3  item-center'>
            <h2 className='font-semibold text-xl'>Official Site</h2>
            <a href={show.network.officialSite} className='text-xl  underline over break-words whitespace-pre-wrap  text-blue-400'>{show.network.officialSite}</a>
        </div>
    </div>)
       }
    </>
    
  )
}

export default NetworkDetails