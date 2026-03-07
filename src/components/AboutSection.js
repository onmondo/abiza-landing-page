// eslint-disable-next-line no-unused-vars
import React from 'react'
import reviews from '../data/reviews.json'
import room1A from '../assets/room1A.jpeg'
import room1B from '../assets/room1B.jpeg'

function AboutSection() {

  const randomIndex = Math.floor(Math.random() * reviews.length)
  const randomReview = reviews[randomIndex]
  randomReview.stars = '★★★★★'.slice(0, randomReview.stars)

  const roomImages = [
    room1A,
    room1B
  ]

  return (
    <section id="about" class="py-20 md:py-32 bg-warm-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-terracotta opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 reveal-on-scroll">
            <span class="text-terracotta font-semibold tracking-wider uppercase text-sm">About Our Home</span>
            <h2 class="font-serif text-4xl md:text-5xl font-bold text-deep-sea leading-tight">
              Intimate Comfort, Memorable Stay
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              At ABIZA Homestay, you can easily travel to Matnog Port because our location is just off the highway and 7 kilometers from the port. And since Sorsogon's beaches and tourist attractions are close to our place, you will surely enjoy and unwind while staying with us.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Discover comfort at our homestay with two inviting bedrooms for up to three guests each. Enjoy plush bedding and a peaceful night's sleep. Our spacious comfort room with a refreshing shower provides a tranquil escape and all amenities for a rejuvenating stay.
            </p>            
            <p class="text-lg text-gray-600 leading-relaxed">
              At Abiza Homestay, we redefine hospitality, ensuring your visit is not just a stay but a collection of unforgettable moments. Welcome to a home where comfort meets charm.
            </p>
                    
            <div class="grid grid-cols-2 gap-6 pt-4">
              <div class="flex items-start space-x-3">
                <div class="bg-terracotta bg-opacity-10 p-3 rounded-full">
                  <svg class="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-deep-sea">Prime Location</h4>
                  <p class="text-sm text-gray-500">10 min drive to port</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="bg-ocean bg-opacity-10 p-3 rounded-full">
                  <svg class="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-deep-sea">Flexible Check-in</h4>
                  <p class="text-sm text-gray-500">16-Hour Availability</p>
                </div>
              </div>
            </div>
          </div>
                
          <div class="relative reveal-on-scroll">
            <div class="absolute inset-0 bg-terracotta rounded-3xl transform rotate-3 opacity-20"></div>
            {/* <img src={room1A} alt="Cozy seaside cottage exterior" class="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transform hover:scale-[1.02] transition-transform duration-500" /> */}
                    

            <div id="default-carousel" class="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transform hover:scale-[1.02] transition-transform duration-500" data-carousel="slide">
              <div class="relative h-[500px] overflow-hidden rounded-base md:h-[500px]">
                {roomImages.map((image, index) => (
                  <div key={index} class={`duration-700 ease-in-out ${index === 0 ? '' : 'hidden'}`} data-carousel-item>
                    <img src={image} class="relative rounded-3xl h-[500px] w-full object-cover" alt={`Room Image ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button
                id="data-carousel-prev"
                type="button"
                class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              >
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-base bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
                >
                  <svg
                    class="h-4 w-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span class="hidden">Previous</span>
                </span>
              </button>
              <button
                id="data-carousel-next"
                type="button"
                class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              >
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-base bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
                >
                  <svg
                    class="h-4 w-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="hidden">Next</span>
                </span>
              </button>
            </div>


            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div class="flex items-center space-x-2 mb-2">
                <div class="flex text-yellow-400">
                  {randomReview.stars}
                </div>
                <span class="text-sm font-bold text-deep-sea">4.9/5</span>
              </div>
              <p class="text-sm text-gray-600 italic">"{randomReview.review}"</p>
              <p class="text-xs text-gray-400 mt-2">— {randomReview.name}, {randomReview.date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>    
  )
}

export default AboutSection
