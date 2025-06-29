import React from 'react'
import { useState } from 'react'
import { FaTimes,FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"
import Logo from "./Logo"

const Header=()=> {
  const [isOpen,setIsOpen]=useState(false)
  const toggleMenu =()=>{
    setIsOpen(prev =>!prev)
  }
  return (
    <header className='
    flex items-center justify-between px-4 md:px-10 h-20
    relative bg-black text-white'>
    {/* <Logo/> */}
    <Navbar 
    isOpen={isOpen}
    toggleMenu={toggleMenu}/>
    <div className='flex items-center gap-4 md:hidden'>
      <Link className='bg-blue-500 hover:bg-blue-700 max-w-36 transition px-6 py-3
      rounded-full text-center block md:inline w-auto' to="/login">Login</Link>
      <button onClick={toggleMenu}>
        {isOpen?<FaTimes size={22}/>:<FaBars size={22}/>}
      </button>

    </div>
    </header>
  )
}

export default Header
