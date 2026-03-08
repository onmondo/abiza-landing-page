/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export function AllRightsReserved() {
  return (
    <section className="rights">
      <label>© 2025 Abiza Homestay. All rights reserved.</label>
      <ul>
        <li><Link to="/termsandcondition#privacypolicy">Privacy Policy</Link></li>
        <li><Link to="/termsandcondition">Terms of Service</Link></li>
        <li>v{APP_VERSION}</li>
        {/* <li>Cookies Settings</li> */}
      </ul>
    </section>
  )
}