import React from 'react'
import TimeLines from '../containers/TimeLines'
import TimeLines2 from '../containers/TimeLines2'



const Experience = () => {
  return (
    <div id="Experience_Section" className=' relative mt-0  m-0  sm:self-center p-4 w-full'>
    <h1 className='text-blue-300 self-center m-2 border border-blue-600 border-transparent p-3 text-3xl font-bold text-center'> My Experiences and Education</h1>
    <div className='flex flex-col md:flex-row self-center px-10 w-full m-0 md: mt-5 md: mb-10' >
    <TimeLines/> 
    <TimeLines2/> 
    </div>
    </div>
  )
}

export default Experience