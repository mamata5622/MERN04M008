import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='shadow-sm shadow-gray-800 text-white backdrop-blur-sm p-3 flex justify-between items-center fixed top-0 w-full z-20 bg-black/70'>
        <div className='ml-10'>
            <h1 className='text-[20px] font-extrabold lg:text-[30px]'>BMamata</h1>
        </div>
        <ul className='gap-15 justify-center lg:text-[15px] font-medium hidden lg:flex mr-10'>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <Link to='/'>Home</Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <Link to='/about'>About</Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <Link to='/education'>Education</Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <Link to='/skills'>Skills</Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <Link to='/project'>Project</Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <Link to='/achievements'>Achievements</Link>
            </li>
            <li className='hover:text-indigo-300 hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='flex mr-10 lg:hidden text-[20px] hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
          <FaBars />  
        </div>
    </div>
  )
}

export default Navbar