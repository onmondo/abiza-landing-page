import React from "react";
import airbnb from '../assets/airbnb-logo-transparent.svg';
import agoda from '../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../assets/booking-dot-com-logo-transparent.svg';
import oneInNewWindowIcon from '../assets/icons8-open-in-new-window-25.png'
import "../styles/bookingSection.css";

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
            case 'closeAllPartner':
                return {
                    isAirbnb: false,
                    isAgoda: false,
                    isBookingDotCom: false,
                }
            default:
                throw new Error();
        }
    }, { isAirbnb: false, isAgoda: false, isBookingDotCom: false });

    // console.log(state);

    const openQRHandler = (event, type) => {
        event.preventDefault();
        dispatch({ type });
    }

    const closeQRHandler = (event) => {
        event.preventDefault();
        dispatch({ type: 'closeAllPartner' })
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
                            <img className="bookingLogo" src={airbnb} alt="AirBnB Logo" />
                            <img src={oneInNewWindowIcon} alt="Open in new window icon" />
                        </a>
                        {/* <a href="#" onClick={() => { openQRHandler(event, 'openAirBnB') }}><img className="qrcode" src={qrIcon} />{state.isAirbnb}</a> */}

                    </li>
                    {/* <li><QRCode value={process.env.AIRBNB_ROOM1} /></li>
                    <li><QRCode value={process.env.AIRBNB_ROOM2} /></li> */}
                    <li>
                        <a className="mainroom" href={process.env.AGODA_ROOM1} target="blank">
                            <img className="bookingLogo" src={agoda} alt="Agoda Logo" />
                            <img src={oneInNewWindowIcon} alt="Open in new window icon" />
                        </a>
                        {/* <a href="#" onClick={() => { openQRHandler(event, 'openAgoda') }}><img className="qrcode" src={qrIcon} /></a> */}
                    </li>
                    {/* <li><QRCode value={process.env.AGODA_ROOM1} /></li>
                    <li><QRCode value={process.env.AGODA_ROOM2} /></li> */}
                    <li>

                        <a className="mainroom" href={process.env.BOOKING_DOT_COM_ROOMS} target="blank">
                            <img className="bookingLogo" src={bookingDotCom} alt="Booking.com Logo" />
                            <img src={oneInNewWindowIcon} alt="Open in new window icon" />
                        </a>
                        {/* <a href="#" onClick={() => { openQRHandler(event, 'openBookingDotCom') }}><img className="qrcode" src={qrIcon} /></a> */}
                    </li>
                    {/* <li><QRCode value={process.env.BOOKING_DOT_COM_ROOMS} /></li> */}
                </ul>
                {/* <QRCodes partners={state} closeQR={closeQRHandler} /> */}
            </section>
        </>
    )
}

export default BookingSection;
