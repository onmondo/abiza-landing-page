import React from "react";
import airbnb from '../assets/airbnb-logo-transparent.svg';
import agoda from '../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../assets/booking-dot-com-logo-transparent.svg';
import oneInNewWindowIcon from '../assets/icons8-open-in-new-window-25.png';
import "../styles/bookingSection.css";
import { motion } from "framer-motion";

function BookingSection(props) {
    const { openPage } = props;
    return (
        <>
            <section id="travelpartner">
                <header>
                    <h3><a href="#travelpartner" onClick={() => { openPage(event, 'openPartners') }}>Our Partners</a></h3>
                </header>
                <ul>
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 2 }}
                    >
                        <a className="mainroom" href={process.env.AIRBNB_ROOM1} target="blank">
                            <img className="bookingLogo" src={airbnb} alt="AirBnB Logo" loading="lazy" />
                            <img src={oneInNewWindowIcon} alt="Open in new window icon" />
                        </a>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 2 }}
                    >
                        <a className="mainroom" href={process.env.AGODA_ROOM1} target="blank">
                            <img className="bookingLogo" src={agoda} alt="Agoda Logo" loading="lazy" />
                            <img src={oneInNewWindowIcon} alt="Open in new window icon" />
                        </a>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 2 }}
                    >

                        <a className="mainroom" href={process.env.BOOKING_DOT_COM_ROOMS} target="blank">
                            <img className="bookingLogo" src={bookingDotCom} alt="Booking.com Logo" loading="lazy" />
                            <img src={oneInNewWindowIcon} alt="Open in new window icon" />
                        </a>
                    </motion.li>
                </ul>
            </section>
        </>
    )
}

export default BookingSection;
