import React from 'react'
import { Link } from 'react-router'

function MainNav() {
  return (
    <nav className="flex justify-between h-8 bg-green-200 px-4 items-center">
    <div className="flex gap-4">  
    <Link to='/'>Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/recap">Recap</Link>

    </div>
    <div className="flex gap-4">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </nav>
  )
}

export default MainNav