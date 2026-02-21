// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AllRightsReserved } from './allRightsReserved'
import { Contacts } from './contacts'
import { Attributions } from './attributions'
import { Header } from './header'

export function FooterSection(props) {
  const { websiteName, phoneNumbers } = props
  return (
    <footer id="aboutus" className="fullbleed">
      <Header websiteName={websiteName} />
      <address>
        <Contacts phoneNumbers={phoneNumbers} />
        <Attributions />
      </address>
      <AllRightsReserved />
    </footer>
  )
}
