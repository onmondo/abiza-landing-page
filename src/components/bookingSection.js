import React, { useState } from "react";
import airbnb from '../assets/airbnb-logo-transparent.svg';
import agoda from '../assets/agoda-logo-transparent.svg';
import bookingDotCom from '../assets/booking-dot-com-logo-transparent.svg';
import oneInNewWindowIcon from '../assets/open-in-new-window.svg';
import { motion } from "framer-motion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BookingForm } from "./common/bookingform";

const listVariants = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            when: 'beforeChildren',
            staggerChildren: 0.2
        }
    }
}

function BookingSection() {
    const [partner, setPartner] = useState("")

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
                        <button popovertarget="form" onClick={() => { setPartner(process.env.AIRBNB_ROOM1) }}>
                            <img className="openWindowIcon" src={oneInNewWindowIcon} alt="Open in new window icon" />
                            <img className="bookingLogo" src={airbnb} alt="AirBnB Logo" loading="lazy" decoding="async" />
                        </button>
                    </motion.li>
                    <motion.li variants={listVariants}>
                        <button popovertarget="form" onClick={() => { setPartner(process.env.AGODA_ROOM1) }}>
                            <img className="openWindowIcon" src={oneInNewWindowIcon} alt="Open in new window icon" />
                            <img className="bookingLogo" src={agoda} alt="Agoda Logo" loading="lazy" decoding="async" />
                        </button>
                    </motion.li>
                    <motion.li variants={listVariants}>
                        <button popovertarget="form" onClick={() => { setPartner(process.env.BOOKING_DOT_COM_ROOMS) }}>
                            <img className="openWindowIcon" src={oneInNewWindowIcon} alt="Open in new window icon" />
                            <img className="bookingLogo" src={bookingDotCom} alt="Booking.com Logo" loading="lazy" decoding="async" />
                        </button>
                    </motion.li>
                </motion.ul>
                <BookingForm partner={partner} />
            </section>
        </>
    )
}

export default BookingSection;
