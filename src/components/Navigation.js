// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import logo from '../assets/logo-transparent.png'

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    console.log('is toggle menu open?', isMobileMenuOpen)
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <nav className="fixed w-full z-50 transition-all duration-300" id="navbar">
      {(!isMobileMenuOpen) 
        ? 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <a href="#hero" className="flex items-center space-x-2">
                <img src={logo} alt="Abiza Homestay Logo" className="w-24 h-24 object-cover rounded-full"/>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-deep-sea hover:text-terracotta transition-colors font-medium">Our Story</a>
              {/* <a href="#rooms" className="text-deep-sea hover:text-terracotta transition-colors font-medium">Rooms</a> */}
              <a href="#location" className="text-deep-sea hover:text-terracotta transition-colors font-medium">Location</a>
              {/* <a href="tel:09177053956" className="bg-terracotta text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">Book Now</a> */}
              <a href="#contact" className="bg-terracotta text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">Book Now</a>
            </div>
            <button className="md:hidden text-deep-sea" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
        : 
        // <div id="mobile-menu" className={`${(isMobileMenuOpen) ? '' : 'hidden md:hidden'} bg-white shadow-lg absolute w-full block`}>
        <div id="mobile-menu" className='bg-white shadow-lg absolute w-full block'>
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#about" className="block px-3 py-2 text-deep-sea hover:text-terracotta" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
            {/* <a href="#rooms" className="block px-3 py-2 text-deep-sea hover:text-terracotta">Rooms</a> */}
            <a href="#location" className="block px-3 py-2 text-deep-sea hover:text-terracotta" onClick={() => setIsMobileMenuOpen(false)}>Location</a>
            {/* <a href="tel:09177053956" className="block px-3 py-2 text-terracotta font-bold">Book Now</a> */}
            <a href="#contact" className="block px-3 py-2 text-terracotta font-bold" onClick={() => setIsMobileMenuOpen(false)}>Book Now</a>
          </div>
        </div>
      }


    </nav>    
  )
}

export default Navigation