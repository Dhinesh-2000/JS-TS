import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ isOpen, toggleMenu }) {
  const navItems = [
    { id: 1, text: 'Home', slug: '/' },
    { id: 2, text: 'Stays', slug: '/stays' },
    { id: 3, text: 'Admin', slug: '/admin' },
    { id: 4, text: 'Login', slug: '/login' },
    { id: 5, text: 'Profile', slug: '/profile' }
  ]

  return (
    <nav
      className={`w-full px-4 py-6 bg-transparent fixed top-0 left-0 z-50 ${isOpen ? "h-full" : "h-auto"} md:h-auto md:flex md:justify-between items-center`}
    >
      {/* Logo Section */}
      <div className="flex justify-start items-center">
        <Link to="/">
          <img 
            className="w-20" 
            src="src/assets/49b87497-a14c-40c8-a9a1-dcc6a6f9f09f.jpg" 
            alt="logo" 
          />
        </Link>
      </div>
      
      {/* Navigation Menu */}
      <ul className={`flex gap-6 w-full md:w-auto ${isOpen ? 'h-full justify-center items-center' : 'md:flex md:justify-end'}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              onClick={toggleMenu}
              to={item.slug}
              className="text-white hover:text-blue-500"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default Navbar
