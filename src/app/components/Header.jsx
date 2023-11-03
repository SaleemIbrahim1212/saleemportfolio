import React from 'react'
import {AiFillFilePdf} from 'react-icons/ai'
import {FaGithubAlt} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import {ImTerminal} from 'react-icons/im'
import Link from 'next/link'

const Header = () => {
  return (
    
<div className=' relative w-full bg-transparent flex flex-col justify-between self-center'>
  
      <div className='flex justify-between px-4 py-3'>
        <ImTerminal size={30} className='fill-white'/>
    <nav>
      <ul className=' flex space-x-4'>
        <li className='hover:text-blue-400 tex-white  cursor-pointer text-lg'>Home</li>
        <Link href = "#About_Section" > <li className='text-blue-400 cursor-pointer text-lg'>About</li></Link>
        <Link   href = "#Experience_Section" className=' scroll-smooth'>  <li className='hover:text-blue-400 cursor-pointer text-lg text-white'>Experience</li> </Link> 
        <Link href = "#Projects_Section" className=' scroll-smooth'> <li className='hover:text-blue-400 cursor-pointer text-lg text-white '>Projects</li> </Link> 
        <Link href = "#Message_Form" className=' scroll-smooth'>  <li className='hover:text-blue-400 cursor-pointer text-lg text-white'>Contact Me</li> </Link> 
      </ul>
    </nav>

  </div>
  <div className='flex flex-col items-center mt-40 mb-14 justify-between'>
  <span className='text-blue-400 text-xl px-3'>Hi there!</span>
  <span className='text-3xl mt-3 text-white'>
    My Name is <span className='text-blue-400'> Saleem Ibrahim</span>

  </span>
  <div className='flex space-x-4 justify-between'> 
  <ul className='flex space-x-4 mt-4'>
  <Link href='https://github.com/saleemibrahim1212' target='_blank'> <li> <FaGithubAlt size={30} className="fill-white"/></li></Link> 
    <Link href="https://www.linkedin.com/in/saleem-ibrahim-0162a8121/" target='_blank' >  <li> <AiFillLinkedin size={30} className='fill-white'/></li></Link>
    </ul>
    </div>
  <div className='flex p-6 rounded-b-md '>
        <Link href='#About_Section' > <button className='border border-white text-white m-3 p-3 rounded-full'> About Me </button></Link>
        <Link href='#Projects_Section'><button className='border border-white text-white m-3 p-3 rounded-full' >My Works </button>  </Link>
  </div>
</div>
<div className='flex flex-auto mt-64 animate-bounce'> 
<Link href='#About_Section' className='font-sans ml-3 text-white mb-10'> Scroll down</Link>
<Link href='#About_Section' className='text-blue-400 ml-1 mt-2 hover: cursor-pointer'><AiOutlineDown/>   </Link>
</div>
</div>


  )
}

export default Header