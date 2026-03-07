// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/logo-transparent.png'

function Navigation() {
  return (
    <nav class="fixed w-full z-50 transition-all duration-300" id="navbar">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center space-x-2">
            <img src={logo} alt="Abiza Homestay Logo" class="w-24 h-24 object-cover rounded-full"/>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="text-deep-sea hover:text-terracotta transition-colors font-medium">Our Story</a>
            <a href="#rooms" class="text-deep-sea hover:text-terracotta transition-colors font-medium">Rooms</a>
            <a href="#location" class="text-deep-sea hover:text-terracotta transition-colors font-medium">Location</a>
            <a href="#contact" class="bg-terracotta text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">Book Now</a>
          </div>
          <button class="md:hidden text-deep-sea" onclick="toggleMobileMenu()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" class="hidden md:hidden bg-white shadow-lg absolute w-full">
        <div class="px-4 pt-2 pb-6 space-y-2">
          <a href="#about" class="block px-3 py-2 text-deep-sea hover:text-terracotta">Our Story</a>
          <a href="#rooms" class="block px-3 py-2 text-deep-sea hover:text-terracotta">Rooms</a>
          <a href="#location" class="block px-3 py-2 text-deep-sea hover:text-terracotta">Location</a>
          <a href="#contact" class="block px-3 py-2 text-terracotta font-bold">Book Now</a>
        </div>
      </div>
    </nav>    
  )
}

export default Navigation