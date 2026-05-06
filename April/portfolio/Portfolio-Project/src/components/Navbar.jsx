import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='shadow-sm text-white p-5 flex justify-around items-center fixed top-0 w-full z-20 bg-purple-900'>
        <div>
            <h1 className='text-[20px] font-extrabold lg:text-[30px]'>Behera<span className='text-pink-800'>Mamata</span></h1>
        </div>
        <ul className='gap-15 justify-center lg:text-[20px] cursor-pointer font-medium hidden sm: block md:flex'>
            <li className='hover:text-pink-800'>
                <Link to='/'>Home</Link>
            </li>
            <li className='hover:text-pink-800'>
                <Link to='/about'>About</Link>
            </li>
            <li className='hover:text-pink-800'>
                <Link to='/skills'>Skills</Link>
            </li>
            <li className='hover:text-pink-800'>
                <Link to='/project'>Project</Link>
            </li>
            {/* <li className='hover:text-pink-800'>
                <Link to='/education'>Education</Link>
            </li> */}
            <li className='hover:text-pink-800'>
                <Link to='/education'>Contact</Link>
            </li>
        </ul>
        <div className='flex md:hidden'>
          <FaBars />  
        </div>
    </div>
  )
}

export default Navbar