import React from 'react'

const Title = ({Title}) => {
  return (
    <div className='text-center text-2xl font-bold py-10 mt-20'>
        <h2>{Title}</h2>
        <div className='h-1 w-40 border-2 border-amber-400 m-auto rounded-2xl'></div>
    </div>
  )
}

export default Title