import React from "react";
import logo from '../../assets/logo-transparent.png';
import { motion } from "framer-motion";

function Navigation(props) {
    const { openPage, phoneNumbers } = props;
    return (
        <section id="navigation">
            <motion.a
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "tween", duration: 3 }}
                href="#navigation"
                onClick={() => { openPage(event, 'goToHome') }}
            >
                <img src={logo} alt="Abiza Homestay Logo"></img>
            </motion.a>

            <nav>
                <ul>
                    {/* <li><a href="#navigation" onClick={() => { openPage(event, 'goToHome') }}>Home</a></li> */}
                    <li><a href="#travelpartner" onClick={() => { openPage(event, 'openPartners') }}>Partners</a></li>
                    <li>
                        {
                            phoneNumbers.map((phoneNumber, index) =>
                                <em key={index}>
                                    &#160;
                                    {/* <a href={`tel:${phoneNumber.areaCode}${phoneNumber.number}`} id={phoneNumber.number} onClick={() => { copyToClipboardHandler(event, phoneNumber) }}>
                                            <span>|</span>{`(0${phoneNumber.number.substring(0, 3)}) ${phoneNumber.number.substring(3, 6)} ${phoneNumber.number.substring(6, 10)} `}
                                        </a> */}
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
        </section>

    )
}

export default Navigation;
