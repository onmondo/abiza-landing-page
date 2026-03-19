// eslint-disable-next-line no-unused-vars
import React from 'react'

function LocationSection() { 
  return (
    <section id="location" className="py-20 md:py-32 bg-deep-sea text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Matnog_317.jpg" alt="Port background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-deep-sea via-deep-sea to-transparent"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <span className="text-terracotta font-semibold tracking-wider uppercase text-sm">Location</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">Steps from the Sea Port</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              At ABIZA Homestay, you can easily travel to Matnog Port because our location is just off the highway and 7 kilometers from the port. And since Sorsogon's beaches and tourist attractions are close to our place, you will surely enjoy and unwind while staying with us.
            </p>
                    
            <div className="space-y-4">
              {/* <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-sm">
                <div className="bg-terracotta p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Walking Distance</h4>
                  <p className="text-sm text-gray-300">3 minutes to local seafood restaurants</p>
                </div>
              </div> */}
                        
              <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-sm">
                <div className="bg-terracotta p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Local Experience</h4>
                  <p className="text-sm text-gray-300">Experience pink beaches in Subic Beach Matnog Sorsogon</p>
                </div>
              </div>
                        
              {/* <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-sm">
                <div className="bg-terracotta p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Sunset Spot</h4>
                  <p className="text-sm text-gray-300">Best harbor sunset views within 2 minutes</p>
                </div>
              </div> */}
            </div>
          </div>
                
          <div className="relative reveal-on-scroll">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="font-serif text-2xl font-bold mb-6 text-deep-sea">Getting Here</h3>
              <div className="space-y-4 text-deep-sea">
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-semibold mb-1">From the Airport</p>
                  <p className="text-sm text-gray-600">Around 2 hours drive (
                    
                    <a href="https://goo.gl/maps/2etmWW5bob9zicM29" target="_blank">
                      Bicol International Airport
                    </a>
                    &nbsp; and &nbsp;
                    <a href="https://goo.gl/maps/XecwcrZ6B5G44T4D9" target="_blank">
                      Legazpi Airport
                    </a>

                    )
                  </p>
                </div>
                {/* <div className="border-b border-gray-200 pb-4">
                  <p className="font-semibold mb-1">From Legazpi Airport</p>
                  <p className="text-sm text-gray-600">15 minutes walk or 5 minutes by tuk-tuk</p>
                </div> */}
                <div>
                  <p className="font-semibold mb-1">From the Port</p>
                  <p className="text-sm text-gray-600">12 minutes drive 
                    (
                  <a href="https://goo.gl/maps/AKEup7hPz3iLkZEN6" target="_blank">
                    Matnog Port
                  </a>
                    )
                  </p>
                </div>
              </div>
              <div className="mt-6 w-full border-2 border-deep-sea text-deep-sea py-3 rounded-xl font-semibold text-center hover:bg-deep-sea hover:text-white transition-all">
                <a href="https://www.google.com/maps?ll=12.631986,124.03464&z=16&t=m&hl=en&gl=PH&mapclient=embed&cid=2486597484570773797" target="_blank">
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
