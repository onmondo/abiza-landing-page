// eslint-disable-next-line no-unused-vars
import React from 'react'

function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-sea">Thoughtful Touches</h2>
          <p className="mt-4 text-gray-600">Everything you need for a comfortable stay</p>
        </div>
            
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group reveal-on-scroll">
            <div className="bg-sand bg-opacity-30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-terracotta group-hover:text-white transition-all duration-300 text-terracotta">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.256-3.905 14.16 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
              </svg>
            </div>
            <h4 className="font-bold text-deep-sea">Connectivity</h4>
            <p className="text-sm text-gray-500 mt-1">Wi-Fi</p>
          </div>
                
          <div className="text-center group reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
            <div className="bg-sand bg-opacity-30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-terracotta group-hover:text-white transition-all duration-300 text-terracotta">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 className="font-bold text-deep-sea">Self Check-in</h4>
            <p className="text-sm text-gray-500 mt-1">Key lock box</p>
          </div>
                
          <div className="text-center group reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="bg-sand bg-opacity-30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-terracotta group-hover:text-white transition-all duration-300 text-terracotta">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h4 className="font-bold text-deep-sea">Fully Equipped</h4>
            <p className="text-sm text-gray-500 mt-1">Air conditioned rooms</p>
          </div>
                
          <div className="text-center group reveal-on-scroll" style={{transitionDelay: '0.3s'}}>
            <div className="bg-sand bg-opacity-30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-terracotta group-hover:text-white transition-all duration-300 text-terracotta">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-12 h-8"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                            
                <path d="M7 4v2m10-2v2M7 18v2m10-2v2" />
                            
                <path d="M10 15V9h2.5a2.5 2.5 0 1 1 0 5H10" />
              </svg>
            </div>
            <h4 className="font-bold text-deep-sea">Spacious Parking</h4>
            <p className="text-sm text-gray-500 mt-1">Security cameras</p>
          </div>
        </div>
      </div>
    </section>    
  )

}

export default AmenitiesSection
