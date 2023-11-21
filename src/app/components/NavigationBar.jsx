'use client'
import { useState } from 'react';
import { ImTerminal } from 'react-icons/im';
import Link from 'next/link';

const NavigationBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='relative w-full bg-transparent flex flex-col justify-between self-center'>

            <div className='flex justify-between px-4 py-3'>
                <ImTerminal size={30} className='fill-white' />
                {/* Toggle button for small screens */}
                <button
                    className='md:hidden text-white focus:outline-none'
                    onClick={toggleMobileMenu}
                >
                    <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                            d='M4 6h16M4 12h16m-7 6h7'></path>
                    </svg>
                </button>
                <nav className="hidden md:flex space-x-4 ">
                    <ul className='flex space-x-4'>
                        <li className='text-blue-400 cursor-pointer text-lg'>Home</li>
                        <Link href='#About_Section' onClick={toggleMobileMenu}>
                            <li className='hover:text-blue-400 text-white cursor-pointer text-lg'>About</li>
                        </Link>
                        <Link onClick={toggleMobileMenu} href='#Experience_Section' className='scroll-smooth'>
                            <li className='hover:text-blue-400 cursor-pointer text-lg text-white'>Experience</li>
                        </Link>
                        <Link onClick={toggleMobileMenu} href='#Projects_Section' className='scroll-smooth'>
                            <li className='hover:text-blue-400 cursor-pointer text-lg text-white '>Projects</li>
                        </Link>
                        <Link onClick={toggleMobileMenu} href='#Message_Form' className='scroll-smooth'>
                            <li className='hover:text-blue-400 cursor-pointer text-lg text-white'>Contact Me</li>
                        </Link>
                    </ul>
                </nav>
            </div>

            {/* Drawer for small screens */}
            <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 ${isMobileMenuOpen ? '' : 'hidden'}`}
                id='mobileMenu'>
                <div className='flex justify-end p-4'>
                    <button
                        className='text-white'
                        onClick={toggleMobileMenu}
                    >
                        <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'></path>
                        </svg>
                    </button>
                </div>
                <div className='flex flex-col items-center mt-16'>
                    <ul className='flex flex-col space-y-4'>
                        <li className='text-blue-400 cursor-pointer text-lg'>Home</li>
                        <Link href='#About_Section'>
                            <li className='hover:text-blue-400 text-white cursor-pointer text-lg'>About</li>
                        </Link>
                        <Link href='#Experience_Section' className='scroll-smooth'>
                            <li className='hover:text-blue-400 cursor-pointer text-lg text-white'>Experience</li>
                        </Link>
                        <Link href='#Projects_Section' className='scroll-smooth'>
                            <li className='hover:text-blue-400 cursor-pointer text-lg text-white '>Projects</li>
                        </Link>
                        <Link href='#Message_Form' className='scroll-smooth'>
                            <li className='hover:text-blue-400 cursor-pointer text-lg text-white'>Contact Me</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
