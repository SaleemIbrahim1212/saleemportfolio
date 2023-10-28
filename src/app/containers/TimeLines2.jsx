'use client'
import React from 'react'
const TimeLines2 = () => {
  return (

<ol className="relative border-l border-gray-200 dark:border-gray-700 md:ml-9 md:mr-11 sm:m-0 sm:mt-5">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <p className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500 font-bold">Wilfrid Laurier University </p>
        <h3 className="text-lg font-semibold text-black ">BSc Computer Science and Psychology (Double Major) </h3>
        <p className="mb-4 text-base font-normal text-black">GPA: 3.3, Professional Experience Stream</p>


    </li>
    <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <p className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500 font-bold">Stanford University and Deeplearning.ai </p>
        <h3 className="text-lg font-semibold text-black ">Machine Learning Specialization </h3>
        <p className="mb-4 text-base font-normal text-black">Remote online, delivered through Coursera</p>

    </li>

</ol>
  )
}

export default TimeLines2