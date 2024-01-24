import React from "react";
import logo from '../../assets/logo-transparent.png';
import { motion } from "framer-motion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navigation(props) {
    const { phoneNumbers } = props;
    return (
        <motion.section
            // drag
            // dragConstraints={{ left: 0, right: 0, top: 0 }}
            id="navigation"
        >
            <Link to="/">
                <motion.img
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "tween", duration: 1.2 }}
                    src={logo}
                    role="presentation"
                    fetchpriority="high"
                    alt="Abiza Homestay Logo"
                />
            </Link>

            <nav>
                <ul>
                    <li><Link to="/partners">Book Now!</Link></li>
                    <li>
                        {
                            phoneNumbers.map((phoneNumber, index) =>
                                <em key={index}>
                                    &#160;
                                    <a href={`tel:${phoneNumber.areaCode}${phoneNumber.number}`} id={phoneNumber.number}>
                                        <span>|</span>{`(0${phoneNumber.number.substring(0, 3)}) ${phoneNumber.number.substring(3, 6)} ${phoneNumber.number.substring(6, 10)} `}
                                    </a>
                                    &#160;
                                </em>
                            )
                        }


                    </li>
                    {/* <li>FAQ</li> */}
                </ul>
            </nav>
        </motion.section>

    )
}

export default Navigation;
