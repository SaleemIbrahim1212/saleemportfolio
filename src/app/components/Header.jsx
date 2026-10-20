import React from 'react'
import {FaGithubAlt} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import NavigationBar from './NavigationBar'
import Link from 'next/link'


const Header = () => {
  return (

<div className=' relative w-full bg-transparent flex flex-col justify-between self-center'>

  <NavigationBar/>
  <div className='flex flex-col items-center mt-20 md:mt-28 mb-14 px-6 text-center justify-between'>
  <span className='text-blue-400 text-sm font-semibold uppercase tracking-widest'>Machine learning · Research · Software</span>
  <h1 className='text-4xl md:text-6xl font-bold mt-5 text-white'>
    <span className='text-blue-400'> Saleem Ibrahim</span>

  </h1>
  <p className='mt-6 text-xl md:text-2xl text-white'>Research Intern at WatchOut / Adonite</p>
  <p className='mt-4 max-w-2xl text-lg leading-relaxed text-gray-300'>Building multi-turn diagnostic systems that ask better questions, reason over competing hypotheses, and reduce uncertainty.</p>
  <p className='mt-4 text-gray-400'>M.Sc. Computer Science (Machine Learning) · Université de Montréal</p>
  <div className='flex space-x-4 justify-between'>
  <ul className='flex space-x-4 mt-4'>
  <Link href='https://github.com/saleemibrahim1212' target='_blank' aria-label='GitHub' rel='noopener noreferrer'> <li> <FaGithubAlt size={30} className="fill-white"/></li></Link>
    <Link href="https://www.linkedin.com/in/saleem-ibrahim-0162a8121/" target='_blank' aria-label='LinkedIn' rel='noopener noreferrer' >  <li> <AiFillLinkedin size={30} className='fill-white'/></li></Link>
    </ul>
    </div>
  <div className='flex p-6 rounded-b-md '>
        <Link href='#Experience_Section' > <button className='border border-white text-white m-3 p-3 rounded-full'> Current Research </button></Link>
        <Link href='#Projects_Section'><button className='border border-white text-white m-3 p-3 rounded-full' >My Works </button>  </Link>
  </div>
</div>
<div className='flex flex-auto mt-8 animate-bounce'>
<Link href='#About_Section' className='font-sans ml-3 text-white mb-10'> Scroll down</Link>
<Link href='#About_Section' className='text-blue-400 ml-1 mt-2 hover: cursor-pointer'><AiOutlineDown/>   </Link>
</div>
</div>


  )
}

export default Header
