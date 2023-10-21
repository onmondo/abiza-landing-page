import React from 'react';
import QRCode from "react-qr-code";
import '../styles/qrCodes.css'
import airbnb from '../assets/airbnb-logo-transparent.svg';
import agoda from '../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../assets/booking-dot-com-logo-transparent.svg';

function QRCodes(props) {

    const { partners, closeQR } = props
    return (
        <section id='qrcodes' >
            <article id="airBnBQRcode" style={{
                display: (partners.isAirbnb) ? 'flex' : 'none'
            }}>
                <section>
                    <header>
                        <h5>
                            <a href={process.env.AIRBNB_ROOM1} target='blank'>
                                <img src={airbnb} alt="AirBnB Logo" />&#160;1
                            </a>
                        </h5>
                    </header>
                    <QRCode value={process.env.AIRBNB_ROOM1} />
                </section>
                <section>
                    <header>
                        <h5>
                            <a href={process.env.AIRBNB_ROOM2} target='blank'>
                                <img src={airbnb} alt="AirBnB Logo" />&#160;2
                            </a>
                        </h5>
                    </header>
                    <QRCode value={process.env.AIRBNB_ROOM2} />
                </section>
                <button onClick={closeQR}>Close</button>
            </article>
            <article id="agodaQRcode" style={{
                display: (partners.isAgoda) ? 'flex' : 'none'
            }}>
                <section>
                    <header>
                        <h5>
                            <a href={process.env.AGODA_ROOM1} target='blank'>
                                <img src={agoda} alt="Agoda Logo" />&#160;1
                            </a>
                        </h5>
                    </header>
                    <QRCode value={process.env.AGODA_ROOM1} />
                </section>
                <section>
                    <header>
                        <h5>
                            <a href={process.env.AGODA_ROOM2} target='blank'>
                                <img src={agoda} alt="Agoda Logo" />&#160;2
                            </a>
                        </h5>
                    </header>
                    <QRCode value={process.env.AGODA_ROOM2} />
                </section>
                <button onClick={closeQR}>Close</button>
            </article>
            <article id="bookingDotComQRcode" style={{
                display: (partners.isBookingDotCom) ? 'flex' : 'none'
            }}>
                <section>
                    <header>
                        <h5>
                            <a href={process.env.BOOKING_DOT_COM_ROOMS} target='blank'>
                                <img src={bookingDotCom} alt="Booking.com Logo" />
                            </a>
                        </h5>
                    </header>
                    <QRCode value={process.env.BOOKING_DOT_COM_ROOMS} />
                </section>
                <button onClick={closeQR}>Close</button>
            </article>
        </section >
    )
}

export default QRCodes;
