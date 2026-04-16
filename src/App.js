// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'
import AboutSection from './components/AboutSection'
import LocationSection from './components/LocationSection'
import AmenitiesSection from './components/AmenitiesSection'
import BookingSection from './components/BookingSection'

export function App() {
  // Initialize scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
          entry.target.style.opacity = '1'
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all reveal-on-scroll elements
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.style.opacity = '0'
      observer.observe(el)
    })

    // Cleanup
    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <AmenitiesSection />
      <BookingSection />
    </>
  )
}
