import React from "react";
import airbnb from '../assets/airbnb-logo-transparent.svg';
import agoda from '../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../assets/booking-dot-com-logo-transparent.svg';
import qrIcon from '../assets/qr-icon.svg';
import QRCodes from "./qrCodes.js";

function BookingSection() {
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'openAirBnB':
                return {
                    isAirbnb: !state.isAirbnb
                };
            case 'openAgoda':
                return {
                    isAgoda: !state.isAgoda
                };
            case 'openBookingDotCom':
                return {
                    isBookingDotCom: !state.isBookingDotCom
                };
            default:
                throw new Error();
        }
    }, { isAirbnb: false, isAgoda: false, isBookingDotCom: false });

    // console.log(state);

    const openQRHandler = (event, type) => {
        event.preventDefault()
        dispatch({ type })
    }

    return (
        <>
            <section id="travelpartner">
                <header>
                    <h3>Our Travel Partner</h3>
                </header>
                <ul>
                    <li>
                        <a className="mainroom" href={process.env.AIRBNB_ROOM1} target="blank">
                            <img src={airbnb} />
                        </a>
                        <a href="#" onClick={() => { openQRHandler(event, 'openAirBnB') }}><img className="qrcode" src={qrIcon} />{state.isAirbnb}</a>
                    </li>
                    <li>

                        <a className="mainroom" href={process.env.AGODA_ROOM1} target="blank">
                            <img src={agoda} />
                        </a>
                        <a href="#" onClick={() => { openQRHandler(event, 'openAgoda') }}><img className="qrcode" src={qrIcon} /></a>
                    </li>
                    <li>

                        <a className="mainroom" href={process.env.BOOKING_DOT_COM_ROOMS} target="blank">
                            <img src={bookingDotCom} />
                        </a>
                        <a href="#" onClick={() => { openQRHandler(event, 'openBookingDotCom') }}><img className="qrcode" src={qrIcon} /></a>
                    </li>
                </ul>
                <QRCodes partners={state} openQR={openQRHandler} />
            </section>
        </>
    )
}

export default BookingSection;
