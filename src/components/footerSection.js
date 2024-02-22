import React from "react";
import QRCode from "react-qr-code";
import airbnb from '../assets/airbnb-logo-transparent.svg';
import agoda from '../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../assets/booking-dot-com-logo-transparent.svg';
import "../styles/footerSection.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Subscription from "./subscription";

function FooterSection(props) {
    const { websiteName, openPage, phoneNumbers } = props
    return (
        <footer id="aboutus" className="fullbleed">
            <header>
                <p className="description">Thank you for visiting {websiteName}. We invite you to explore our cozy retreat and experience the warmth of a home away from home. Whether you're seeking relaxation or adventure, our homestay is your gateway to a memorable stay.</p>
                <p className="description">Book your stay now and embark on a journey where comfort meets hospitality. We look forward to hosting you and making your stay truly special.</p>
                <p className="description">{websiteName} - Where Every Stay Feels Like Coming Home.</p>
                <Subscription />
            </header>
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
                <dl>
                    <dt>Help</dt>
                    <dd>
                        <ul>
                            {
                                phoneNumbers.map((phoneNumber, index) =>
                                    <li key={index}>
                                        <a href={`tel:${phoneNumber.areaCode}${phoneNumber.number}`} key={index} id={phoneNumber.number}>
                                            {`(0${phoneNumber.number.substring(0, 3)}) ${phoneNumber.number.substring(3, 6)} ${phoneNumber.number.substring(6, 10)}`}
                                        </a>
                                    </li>
                                )
                            }
                            {/* <li>FAQs</li> */}
                            <li><Link to="/termsandcondition#refundpolicy">Refund Policy</Link></li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>Thanks</dt>
                    <dd>
                        <ul>
                            <li>
                                <a href="https://www.vecteezy.com/png/21971442-blue-watercolor-stain-watercolor-background" target="blank">
                                    Background PNGs
                                </a>
                                &#160;by&#160;
                                <a href="https://www.vecteezy.com/members/illustration4stock224427" target="blank">
                                    Ovidiu Timplaru
                                </a>
                                &#160;/&#160;
                                <a href="https://www.vecteezy.com/">
                                    Vecteezy
                                </a>
                            </li>
                            <li>
                                <a href="https://www.vecteezy.com/free-vector/map" target="blank">
                                    Map Vectors
                                </a>
                                &#160;by&#160;
                                <a href="https://www.vecteezy.com/members/illustration4stock224427">
                                    Ovidiu Timplaru
                                </a>
                                &#160;/&#160;
                                <a href="https://www.vecteezy.com/">
                                    Vecteezy
                                </a>
                            </li>
                            <li>
                                <a title="ramon garra, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://upload.wikimedia.org/wikipedia/commons/b/b0/Matnog_317.jpg">Matnog Beach by Ramon Garra via Wikimedia Commons</a>
                            </li>
                            <li>
                                <a title="Patrickroque01, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://upload.wikimedia.org/wikipedia/commons/8/87/Matnog_Port_arch_%28National_Road%2C_Matnog%2C_Sorsogon%3B_04-26-2023%29.jpg">Matnog Port by Patrickroque01 via Wikimedia Commons</a>
                            </li>
                            <li>
                                <a title="Lawrence Ruiz, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Legazpi_Airport_Terminal.JPG">Legazpi Airport Terminal by Lawrence Ruiz via Wikimedia Commons</a>
                            </li>
                            <li>
                                play-bold
                                &#160;icon by&#160;
                                <a target="_blank" href="https://www.figma.com/community/file/1166831539721848736">480 Design</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </address>
            <ul id="qrCodes">
                <li>
                    <img src={airbnb} alt="AirBnB Logo" loading="lazy" decoding="async" />
                </li>
                <li><QRCode value={process.env.AIRBNB_ROOM1} /></li>
                <li><QRCode value={process.env.AIRBNB_ROOM2} /></li>
                <li>
                    <img src={agoda} alt="Agoda Logo" loading="lazy" decoding="async" />
                </li>
                <li><QRCode value={process.env.AGODA_ROOM1} /></li>
                <li><QRCode value={process.env.AGODA_ROOM2} /></li>
                <li>
                    <img src={bookingDotCom} alt="Booking.com Logo" loading="lazy" decoding="async" />
                </li>
                <li><QRCode value={process.env.BOOKING_DOT_COM_ROOMS} /></li>
            </ul>
            <section className="rights">
                <label>© 2023 Abiza Homestay. All rights reserved.</label>
                <ul>
                    <li><Link to="/termsandcondition#privacypolicy">Privacy Policy</Link></li>
                    <li><Link to="/termsandcondition">Terms of Service</Link></li>
                    {/* <li>Cookies Settings</li> */}
                </ul>
            </section>
        </footer>
    )
}

export default FooterSection;
