/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import QRCode from 'react-qr-code'
import airbnb from '../../assets/airbnb-logo-transparent.svg'
import agoda from '../../assets/agoda-logo-transparent.svg'
import bookingDotCom from '../../assets/booking-dot-com-logo-transparent.svg'

export function QRCodes() {
  return (
    <ul>
      <li>
        <img src={airbnb} alt="AirBnB Logo" loading="lazy" decoding="async" />
      </li>
      <li><QRCode value={AIRBNB_ROOM1} /></li>
      <li><QRCode value={AIRBNB_ROOM2} /></li>
      <li>
        <img src={agoda} alt="Agoda Logo" loading="lazy" decoding="async" />
      </li>
      <li><QRCode value={AGODA_ROOM1} /></li>
      <li><QRCode value={AGODA_ROOM2} /></li>
      <li>
        <img src={bookingDotCom} alt="Booking.com Logo" loading="lazy" decoding="async" />
      </li>
      <li><QRCode value={BOOKING_DOT_COM_ROOMS} /></li>
    </ul>
  )
}