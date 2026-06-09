import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='shadow-sm shadow-gray-800 text-white backdrop-blur-sm p-3 flex justify-between items-center fixed top-0 w-full z-20 bg-black/70'>
        <div className='ml-10'>
            <h1 className='text-[20px] font-extrabold lg:text-[30px]'>BMamata</h1>
        </div>
        <ul className='gap-15 justify-center lg:text-[15px] font-medium hidden lg:flex mr-10 scroll-smooth'>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <a href="#home">Home</a>
                <Link to='/'></Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <a href="#about">About</a>
                <Link to='/about'></Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <a href="#education">Education</a>
                <Link to='/education'></Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <a href="#skills">Skills</a>
                <Link to='/skills'></Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <a href="#project">Project</a>
                <Link to='/project'></Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <a href="#achievement">Achievements</a>
                <Link to='/achievements'></Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <a href="#contact">Contact</a>
                <Link to='/contact'></Link>
            </li>
        </ul>
        <div className='flex mr-10 lg:hidden text-[20px] hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
          <FaBars />  
        </div>
    </div>
  )
}

export default Navbar