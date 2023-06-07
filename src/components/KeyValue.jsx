import React from 'react'

const KeyValue = ({name,value}) => {
  return (
    <div className='flex gap-2'>
            <h2 className='text-xl font-semibold'>{name}:- {value}</h2>
    </div>
  )
}

export default KeyValue