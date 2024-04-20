import React from "react";
import { QRCodes } from "./qrCodes";
import { AllRightsReserved } from "./allRightsReserved";
import { Contacts } from "./contacts";
import { Attributions } from "./attributions";
import { Header } from "./header";

export function FooterSection(props) {
    const { websiteName, openPage, phoneNumbers } = props
    return (
        <footer id="aboutus" className="fullbleed">
            <Header websiteName={websiteName} />
            <address>
                {/* <dl>
                    <dt>Company</dt>
                    <dd>
                        <ul>
                            <li><a href="#aboutme" onClick={() => { openPage(event, 'goToHome') }}>About Us</a></li>
                            <li>Blog</li>
                            <li>Customers</li>
                            <li>Packages</li>
                            <li>Community</li>
                        </ul>
                    </dd>
                </dl> */}
                <Contacts phoneNumbers={phoneNumbers} />
                <Attributions />
            </address>
            <QRCodes />
            <AllRightsReserved />
        </footer>
    )
}
