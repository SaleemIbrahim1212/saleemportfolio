'use client'
import React from 'react'
import {AiFillFilePdf} from 'react-icons/ai'
import {FaGithubAlt} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import {ImTerminal} from 'react-icons/im'
import Link from 'next/link'


const Header = () => {
  return (
    
<div className='w-full bg-black flex flex-col justify-between self-center'>
      <div className='flex justify-between px-4 py-3'>
        <ImTerminal size={30}/>
    <nav>
      <ul className='flex space-x-4'>
        <li className='hover:text-blue-400 cursor-pointer text-lg'>Home</li>
        <Link href = "#About_Section"> <li className='hover:text-blue-400 cursor-pointer text-lg'>About</li></Link>
        <li className='hover:text-blue-400 cursor-pointer text-lg'>Projects</li>
        <li className='hover:text-blue-400 cursor-pointer text-lg'>Experience</li>
        <li className='hover:text-blue-400 cursor-pointer text-lg'>Resume</li>
      </ul>
    </nav>

  </div>
  <div className='flex flex-col items-center mt-40 mb-14 justify-between'>
  <span className='text-blue-400 text-xl px-3'>Hi there!</span>
  <span className='text-3xl mt-3'>
    My Name is <span className='text-blue-400'> Saleem Ibrahim</span>

  </span>
  <div className='flex space-x-4 justify-between'> 
  <ul className='flex space-x-4 mt-4'>
    <li> <AiFillFilePdf size={30}/> </li>
    <li> <FaGithubAlt size={30}/></li>
    <li> <AiFillLinkedin size={30}/></li>
    </ul>
    </div>
  <div className='flex p-6 rounded-b-md '>
        <button className='border border-white m-3 p-3 rounded-full'> About Me </button>
        <button className='border border-white m-3 p-3 rounded-full' > Recent Projects</button> 
  </div>
</div>
<div className='flex flex-auto mt-64'> 
<span className='font-sans ml-3 mb-10'> Scroll down </span>
<span className='text-blue-400 ml-1 mt-2 hover: cursor-pointer'><AiOutlineDown/>  </span>
</div>
</div>


  )
}

export default Header