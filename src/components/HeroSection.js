// eslint-disable-next-line no-unused-vars
import React from 'react'

function HeroSection() {
  return (
    <section class="relative h-screen hero-pattern flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-warm-white"></div>
        
      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div class="float-animation">
          <p class="text-sand text-lg md:text-xl font-medium mb-4 tracking-widest uppercase fade-in-up">Your Homestay Journey Begins Here</p>
          <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight fade-in-up delay-100">
            Discover<br />Tranquility
          </h1>
          <p class="text-xl md:text-2xl text-sand mb-10 max-w-2xl mx-auto font-light fade-in-up delay-200">
            A charming single-story retreat with two cozy rooms, steps away from the bustling sea port
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-300">
            <a href="#contact" class="bg-terracotta text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Reserve Your Stay
            </a>
            <a href="#rooms" class="bg-white bg-opacity-20 backdrop-blur-md text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-deep-sea transition-all">
              Explore Rooms
            </a>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
