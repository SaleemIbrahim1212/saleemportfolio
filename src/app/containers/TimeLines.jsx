'use client'
import React from 'react'
const TimeLines = () => {
  return (

<ol className="relative border-l border-gray-200 dark:border-gray-700 mr-10 w-2/4">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500 font-bold">Teaching and Learning Systems Assisstant </time>
        <h3 className="text-lg font-semibold text-black ">Wilfrid Laurier University</h3>
        <p className="mb-4 text-base font-normal text-black">Managed a high volume of daily emails (100+) from students, faculty, and staff while providing front-line support
for Brightspace, Laurier’s Learning Management System.</p>


    </li>
    <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500 font-bold">Intern </time>
        <h3 className="text-lg font-semibold text-black ">Vision Design Inc</h3>
        <p className="mb-4 text-base font-normal text-black">Conducted extensive keyword research to optimize website content and improve online visibility, resulting in
increased organic traffic and higher search engine rankings.</p>
</li>

</ol>
  )
}

export default TimeLines