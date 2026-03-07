// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import PartnerCard from './card'
import { motion } from 'framer-motion'
import { BookingForm } from '../common/bookingform'

const cardVariants = {
  hover: {
    scale: 1.02,
    boxShadow: '0px 0px 12px 4px rgb(131 217 209)',
    // borderColor: "rgb(131 217 209)",
    transition: {
      duration: 0.4,
      // yoyo: Infinity
    }
  }
}
function PartnerCards(props) {
  const [room, setRoom] = useState('')
  const { partners } = props
  return (
    <address>
      <dl>
        <dt>Intro</dt>
        <dd><h2>Our Travel Partners</h2></dd>
        <dd><p className="description">Step into a world of unparalleled hospitality with our curated selection of homestays on Airbnb, Agoda, and Booking.com.</p></dd>
        <dd><p className="description">Whether you're seeking a cozy retreat, cultural immersion, or a luxurious escape, our platforms offer a diverse range of accommodations to make your stay truly extraordinary.</p></dd>
        <dd><p className="description">Embrace the comfort of a home, the convenience of seamless booking, and the joy of discovering new destinations—all with Airbnb, Agoda, and Booking.com.</p></dd>
      </dl>
      {partners.map((partner, index) => {
        return (
          <motion.dl
            className="partnercards"
            key={index}
            variants={cardVariants}
            whileHover="hover"
          >
            <PartnerCard partner={partner} setRoom={setRoom} />
          </motion.dl>
        )
      })}
      <BookingForm partner={room} />
    </address>
  )
}

export default PartnerCards
