import React from 'react'
import TimeLines from '../containers/TimeLines'
import TimeLines2 from '../containers/TimeLines2'



const Experience = () => {
  return (
    <div className='md:m-20 md:mt-6  sm:m-5 sm:self-center sm:mt-44 p-4 w-full'>
    <h1 className='text-blue-300 self-center m-2 border border-blue-600 border-transparent p-3 text-3xl font-bold text-center'> My Experiences and Education</h1>
    <div className='flex sm:flex-col  md:flex-row self-center  px-10 w-full' >
    <TimeLines/> 
    <TimeLines2/> 
    </div>
    </div>
  )
}

export default Experience