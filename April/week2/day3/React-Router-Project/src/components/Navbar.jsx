import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='flex justify-evenly border-b-2 border-yellow-500 p-3'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/user'>UserProfile</Link>
    </div>
  )
}

export default Navbar