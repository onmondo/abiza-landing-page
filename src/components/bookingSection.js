import React from "react";
import airbnb from '../assets/airbnb-logo-transparent.svg';
import agoda from '../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../assets/booking-dot-com-logo-transparent.svg';
import oneInNewWindowIcon from '../assets/open-in-new-window.svg';
import "../styles/bookingSection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const listVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: 0.4
        }
    }
}

function BookingSection() {
    return (
        <>
            <section id="travelpartner">
                <header>
                    <h3><Link to="/partners">Our Partners</Link></h3>
                </header>
                <motion.ul
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.li variants={listVariants}>
                        <a className="mainroom" href={process.env.AIRBNB_ROOM1} target="blank">
                            <img className="bookingLogo" src={airbnb} alt="AirBnB Logo" loading="lazy" decoding="async" />
                            <img className="openWindowIcon" src={oneInNewWindowIcon} alt="Open in new window icon" />
                        </a>
                    </motion.li>
                    <motion.li variants={listVariants}>
                        <a className="mainroom" href={process.env.AGODA_ROOM1} target="blank">
                            <img className="bookingLogo" src={agoda} alt="Agoda Logo" loading="lazy" decoding="async" />
                            <img className="openWindowIcon" src={oneInNewWindowIcon} alt="Open in new window icon" />
                        </a>
                    </motion.li>
                    <motion.li variants={listVariants}>
                        <a className="mainroom" href={process.env.BOOKING_DOT_COM_ROOMS} target="blank">
                            <img className="bookingLogo" src={bookingDotCom} alt="Booking.com Logo" loading="lazy" decoding="async" />
                            <img className="openWindowIcon" src={oneInNewWindowIcon} alt="Open in new window icon" />
                        </a>
                    </motion.li>
                </motion.ul>
            </section>
        </>
    )
}

export default BookingSection;
