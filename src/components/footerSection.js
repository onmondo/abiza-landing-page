import React from "react";
import QRCode from "react-qr-code";
import airbnb from '../assets/airbnb-logo-transparent.svg';
import agoda from '../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../assets/booking-dot-com-logo-transparent.svg';
import "../styles/footerSection.css";

function FooterSection(props) {
    const { websiteName, openPage, phoneNumbers, copyToClipboardHandler } = props
    return (
        <footer id="aboutus" className="fullbleed">
            <header>
                <p className="description">Thank you for visiting {websiteName}. We invite you to explore our cozy retreat and experience the warmth of a home away from home. Whether you're seeking relaxation or adventure, our homestay is your gateway to a memorable stay.</p>
                <p className="description">Book your stay now and embark on a journey where comfort meets hospitality. We look forward to hosting you and making your stay truly special.</p>
                <p className="description">{websiteName} - Where Every Stay Feels Like Coming Home.</p>
            </header>
            <address>
                <dl>
                    <dt>Company</dt>
                    <dd>
                        <ul>
                            <li><a href="#aboutme" onClick={() => { openPage(event, 'goToHome') }}>About Us</a></li>
                            {/* <li>Blog</li> */}
                            {/* <li>Customers</li> */}
                            {/* <li>Packages</li> */}
                            {/* <li>Community</li> */}
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>Help</dt>
                    <dd>
                        <ul>
                            {
                                phoneNumbers.map((phoneNumber, index) =>
                                    <li>
                                        <a href="#" id={phoneNumber.number} onClick={() => { copyToClipboardHandler(event, phoneNumber) }}>
                                            {`(0${phoneNumber.number.substring(0, 3)}) ${phoneNumber.number.substring(3, 6)} ${phoneNumber.number.substring(6, 10)}`}
                                        </a>
                                    </li>
                                )
                            }
                            {/* <li>FAQs</li> */}
                            <li><a href="#refundpolicy" onClick={() => { props.openPage(event, 'openTermsAndCondition') }}>Refund Policy</a></li>
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
                                <a href="https://www.vecteezy.com/photo/2299654-beautiful-tropical-beach-background" target="blank">
                                    Free Stock photos
                                </a>
                                &#160;by&#160;
                                <a href="https://www.vecteezy.com/members/siraphol-siricharattakul">
                                    Siraphol Siricharattakul
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
                            {/* <li>
                                <a target="_blank" href="https://icons8.com/icon/86206/copy">Copy</a>
                                &#160;icon by&#160;
                                <a target="_blank" href="https://icons8.com">Icons8</a>
                            </li> */}
                            <li>
                                <a target="_blank" href="https://icons8.com/icon/heLnIpSDWOWE/external-link">
                                    open in new window
                                </a>
                                &#160;icon by&#160;
                                <a target="_blank" href="https://icons8.com">Icons8</a>
                            </li>
                            {/* <li>
                                <a target="_blank" href="https://icons8.com/icon/59872/refresh">Refresh</a>
                                &#160;icon by&#160;
                                <a target="_blank" href="https://icons8.com">Icons8</a>
                            </li> */}
                        </ul>
                    </dd>
                </dl>
            </address>
            <ul id="qrCodes">
                <li>
                    <img src={airbnb} alt="AirBnB Logo" />
                </li>
                <li><QRCode value={process.env.AIRBNB_ROOM1} /></li>
                <li><QRCode value={process.env.AIRBNB_ROOM2} /></li>
                <li>
                    <img src={agoda} alt="Agoda Logo" />
                </li>
                <li><QRCode value={process.env.AGODA_ROOM1} /></li>
                <li><QRCode value={process.env.AGODA_ROOM2} /></li>
                <li>
                    <img src={bookingDotCom} alt="Booking.com Logo" />
                </li>
                <li><QRCode value={process.env.BOOKING_DOT_COM_ROOMS} /></li>
            </ul>
            <section className="rights">
                <label>© 2023 Abiza Homestay. All rights reserved.</label>
                <ul>
                    <li><a href="#privacypolicy" onClick={() => { openPage(event, 'openTermsAndCondition') }}>Privacy Policy</a></li>
                    <li><a href="#termsandcondition" onClick={() => { openPage(event, 'openTermsAndCondition') }}>Terms of Service</a></li>
                    {/* <li>Cookies Settings</li> */}
                </ul>
            </section>
        </footer>
    )
}

export default FooterSection;
