// eslint-disable-next-line no-unused-vars
import React from 'react'
import agodaLogo from '../assets/agoda-logo-transparent.svg'
import bookingLogo from '../assets/booking-dot-com-logo-transparent.svg'
import airbnbLogo from '../assets/airbnb-logo-transparent.svg'

function BookingSection() {
  return (
    <section id="contact" class="py-20 md:py-32 bg-sand bg-opacity-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden reveal-on-scroll">
          <div class="bg-terracotta p-8 text-center text-white">
            <h2 class="font-serif text-3xl md:text-4xl font-bold mb-2">Begin Your Coastal Escape</h2>
            <p class="opacity-90">Book directly for the best rates</p>
          </div>
                
          <div class="p-8 md:p-12">
            <div className="grid justify-items-center place-items-center grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
                <a href={AGODA_ROOM2} target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="Agoda Logo" class="w-auto md:w-32 mx-auto md:mx-0 h-12 h-30 object-contain rounded-lg mb-6 md:mb-0 grayscale" />
                </a>
              </div>
              <div className="text-center group reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
                <a href={BOOKING_DOT_COM_ROOMS} target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Booking.com_Icon_2022.svg" alt="Booking.com Logo" class="w-auto md:w-32 mx-auto md:mx-0 h-12 object-contain rounded-lg mb-6 md:mb-0 grayscale" />
                </a>
              </div>
              <div className="text-center group reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
                <a href={AIRBNB_ROOM2} target="_blank" rel="noopener noreferrer">
                  <img src={airbnbLogo} alt="Airbnb Logo" class="w-auto md:w-32 mx-auto md:mx-0 h-12 object-contain rounded-lg mb-6 md:mb-0 grayscale" />
                </a>                
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection
