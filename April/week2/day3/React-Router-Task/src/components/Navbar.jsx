import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='flex justify-evenly border-b-3 p-3 border-yellow-500'>
        
        <Link to='/' className='hover:text-green-500 font-bold'>Home</Link>
        <Link to='/about' className='hover:text-green-500 font-bold'>About</Link>
        <Link to='/users/profile' className='hover:text-green-500 font-bold'>Profile</Link>
        <Link to='/users/settings' className='hover:text-green-500 font-bold'>Settings</Link>
    </div>
  )
}

export default Navbar