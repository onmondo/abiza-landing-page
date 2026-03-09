// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import {
  useLocation 
} from 'react-router-dom'
import './App.css'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'
import AboutSection from './components/AboutSection'
import LocationSection from './components/LocationSection'
import AmenitiesSection from './components/AmenitiesSection'

export function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <AmenitiesSection />
    </>
  )
}
