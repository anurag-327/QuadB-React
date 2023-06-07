import React from 'react'
import Show from './Show'

const Shows = ({shows}) => {
  return (
    <div className='w-[90vw] sm:w-[98vw] mt-10 flex flex-col gap-2'>
        <h2 className='text-4xl underline text-blue-400 font-bold sm:ml-10'>Shows</h2>
        <div className='flex flex-wrap gap-8 mt-6 justify-center w-auto  items-center'>
            {
                shows.map((data) => <Show key={data.show.id} data={data} />)
            }
        </div>
    </div>
  )
}

export default Shows