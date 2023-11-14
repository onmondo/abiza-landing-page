import React from 'react';
import QRCode from "react-qr-code";
import '../../styles/qrCodes.css'
import airbnb from '../../assets/airbnb-logo-transparent.svg';
import agoda from '../../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../../assets/booking-dot-com-logo-transparent.svg';

function QRCardContainer(props) {

    const { QRId, partners, closeQR } = props
    return (
        <article id={QRId} style={{
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
    )
}

export default QRCardContainer;
