import React from "react";
import logo from '../../assets/logo-transparent.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navigation(props) {
    const { openPage, phoneNumbers } = props;
    return (
        <section id="navigation">
            {/* <motion.a
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "tween", duration: 3 }}
                href="#navigation"
                onClick={() => { openPage(event, 'goToHome') }}
            >
                <img src={logo} alt="Abiza Homestay Logo"></img>
            </motion.a> */}

            <Link to="/"><img src={logo} alt="Abiza Homestay Logo" /></Link>
            <nav>
                <ul>
                    <li><Link to="/partners">Partners</Link></li>
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
        </section>

    )
}

export default Navigation;
