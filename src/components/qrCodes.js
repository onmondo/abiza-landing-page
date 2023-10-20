import React from 'react';
import QRCode from "react-qr-code";
import '../styles/qrCodes.css'

function QRCodes(props) {

    const { partners, openQR } = props
    return (
        <section id='qrcodes' style={{
            display: (partners.isAirbnb || partners.isAgoda || partners.isBookingDotCom) ? 'block' : 'none',
            opacity: (partners.isAirbnb || partners.isAgoda || partners.isBookingDotCom) ? 1 : 0
        }}>
            <p id="airBnBQRcode" style={{
                display: (partners.isAirbnb) ? 'block' : 'none',
                opacity: (partners.isAirbnb) ? 1 : 0
            }} onClick={() => { openQR(event, 'openAirBnB') }}>
                <QRCode value={process.env.AIRBNB_ROOM1} />
                <QRCode value={process.env.AIRBNB_ROOM2} />
            </p>
            <p id="agodaQRcode" style={{
                display: (partners.isAgoda) ? 'block' : 'none',
                opacity: (partners.isAgoda) ? 1 : 0
            }} onClick={() => { openQR(event, 'openAgoda') }}>
                <QRCode value={process.env.AGODA_ROOM1} />
                <QRCode value={process.env.AGODA_ROOM2} />
            </p>
            <p id="bookingDotComQRcode" style={{
                display: (partners.isBookingDotCom) ? 'block' : 'none',
                opacity: (partners.isBookingDotCom) ? 1 : 0
            }} onClick={() => { openQR(event, 'openBookingDotCom') }}>
                <QRCode value={process.env.BOOKING_DOT_COM_ROOMS} />
            </p>
        </section >
    )
}

export default QRCodes;
