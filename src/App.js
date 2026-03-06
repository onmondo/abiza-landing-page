// eslint-disable-next-line no-unused-vars
import React, { useEffect, lazy, Suspense } from 'react'
// import Navigation from './components/headerSection/nav.js'
// import Home from './pages/home.js'
// import TermsAndCondition from "./pages/termsAndCondition.js";
// import { FooterSection } from './components/footerSection'
// import Partners from "./pages/partners.js";
import {
  //  Route, 
  //  Switch, 
  useLocation 
} from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion'
// import Amenities from "./pages/amenities.js";
// import homestay from './assets/homestay.png'
// import room1A from './assets/room1A.jpeg'
// import room1B from './assets/room1B.jpeg'
// import room2A from './assets/room2A.jpeg'
// import room2B from './assets/room2B.jpeg'
// import crA from './assets/crA.jpeg'
// import crB from './assets/crB.jpeg'
// import parking from './assets/parking.jpg';
// import parking from './assets/shared_garage.jpg'
// import loading from './assets/loading-twotone-loop.svg'
// import './App.scss'
import './App.css'

// const TermsAndCondition = lazy(() => import('./pages/termsAndCondition.js'))
// const Partners = lazy(() => import('./pages/partners.js'))
// const Amenities = lazy(() => import('./pages/amenities.js'))

export function App() {
  // const location = useLocation()
  // const websiteName = 'Abiza Homestay'
  // const phoneNumbers = [
  //   {
  //     areaCode: '+63',
  //     number: '9177053956',
  //     viberName: 'Aiza Blando'
  //   },
  //   {
  //     areaCode: '+63',
  //     number: '9204754533'
  //   }
  // ]

  // const amenities = [
  //   {
  //     src: homestay,
  //     alt: 'The house',
  //     hash: 'LVFicG9FD%sS_NIoRQn$yXW;V?s.'
  //   },
  //   // {
  //   //     src: bookingDotComAward,
  //   //     alt: 'Booking.com award',
  //   //     hash: null,
  //   // },
  //   {
  //     src: room1A,
  //     alt: 'Room 1 A',
  //     hash: 'LUKKyf~qD%RkM}-pt6oJ%1D%axt7'
  //   },
  //   {
  //     src: room1B,
  //     alt: 'Room 1 B',
  //     hash: 'LPPPy89v~q-pyE$|?abI%Mo#t7bH',
  //   },
  //   {
  //     src: room2A,
  //     alt: 'Room 2 A',
  //     hash: 'LTNTqC~p_N009a-;-;IU-;M_IU%M'
  //   },
  //   {
  //     src: room2B,
  //     alt: 'Room 2 B',
  //     hash: 'LaLqIa~WM~M_S%xvaISP%2RObds,'
  //   },
  //   {
  //     src: crA,
  //     alt: 'Rest Room A',
  //     hash: 'LIIhdHofxutR_NM{xuof%MM{xuof'
  //   },
  //   {
  //     src: crB,
  //     alt: 'Rest Room B',
  //     hash: 'LKIX]hV@IUoe_NRjIUj[xaWBM{fQ',
  //   },
  //   {
  //     src: parking,
  //     alt: 'Parking',
  //     hash: 'LRI=iIVrxvR%tpoLWTxv?vxZofox'
  //   }
  // ]

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    // <>
    //   <Navigation
    //     phoneNumbers={phoneNumbers}
    //   />
    //   <AnimatePresence>
    //     <Switch location={location} key={location.key}>
    //       <Route exact path="/">
    //         <Home websiteName={websiteName} amenities={amenities} />
    //       </Route>
    //       <Suspense fallback={<img src={loading} role="presentation" alt="Loading GIF from Giphy" />}>
    //         <Route path="/partners">
    //           <Partners />
    //         </Route>
    //         <Route path="/termsandcondition">
    //           <TermsAndCondition
    //             phoneNumbers={phoneNumbers}
    //             websiteName={websiteName}
    //           />
    //         </Route>
    //         <Route path="/amenities">
    //           <Amenities amenities={amenities} />
    //         </Route>
    //       </Suspense>
    //     </Switch>
    //   </AnimatePresence>
    //   <FooterSection
    //     websiteName={websiteName}
    //     phoneNumbers={phoneNumbers}
    //   />
    // </>
    <section class="relative h-screen hero-pattern flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-warm-white"></div>
        
      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div class="float-animation">
          <p class="text-sand text-lg md:text-xl font-medium mb-4 tracking-widest uppercase fade-in-up">Welcome to Your Coastal Escape</p>
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
