import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
// import logo from '../../assets/logo-transparent.png';
// import mouse from '../../assets/mouse-scroll.svg';
import homestay from '../../assets/homestay.png';
// import copyIcon from '../../assets/icons8-copy-24.png';
// import refreshIcon from '../../assets/icons8-refresh-30.png';
import WeatherWidget from "./weatherWidget";
import ClockWidget from "./clockWidget";
import "../../styles/headerSection.css";
import "../../styles/contactUs.css";
import { motion } from "framer-motion";
import { dashBoardVariant } from "./animationVariants";

function HeaderSection() {
    // console.count('component HeaderSection rendered!');
    const [beachImageLoaded, setBeachImageLoaded] = useState(false);
    const beachImage = 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Matnog_317.jpg';
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setBeachImageLoaded(true)
        }
        img.src = beachImage
    }, [beachImage])

    const [houseImageLoaded, setHouseImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setHouseImageLoaded(true)
        }
        img.src = homestay
    }, [homestay])
    return (
        <>
            <article id="aboutme">
                <header>
                    <motion.h1
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1.2 }}
                    >
                        Discover tranquility at Abiza Homestay
                    </motion.h1>
                    <p className="description">You can easily travel to Matnog Port because our location is just off the highway and 7 kilometers from the port. And since Sorsogon's beaches and tourist attractions are close to our place, you will surely enjoy and unwind while staying with us.</p>
                    <p className="description">Your Homestay Journey Begins Here.</p>
                </header>
                <section id="contactus">
                    <motion.address
                        variants={dashBoardVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <ClockWidget />
                        <WeatherWidget />
                        {/* <dl>
                            <dt>📧 Email Address</dt>
                            <dd><a href="mailto:aizablando7@gmail.com">aizablando7@gmail.com</a></dd>
                        </dl> */}
                        {/* <dl>
                            <dt>🗺️ Location</dt>
                            <dd><a href={process.env.GMAP_LOCATION} target="blank">Hidhid Matnog Sorsogon</a></dd>
                        </dl> */}
                    </motion.address>
                </section>
            </article>
            <section id="promote">
                <motion.section
                    className="homestayreview"
                    initial={{ x: "30vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1.2, type: "tween" }}
                >
                    <a className="mainroom" href={process.env.AIRBNB_ROOM1} target="blank">
                        <>
                            <Blurhash
                                className="profilepic"
                                hash="LVFicG9FD%sS_NIoRQn$yXW;V?s."
                                punch={1}
                                src={homestay}
                                style={{ display: houseImageLoaded ? "none" : "inline" }}
                                alt="Glimpse of the homestay"
                                width={64}
                                height={64}
                            />
                            <img
                                className="profilepic"
                                src={homestay}
                                alt="Glimpse of the homestay"
                                style={{ display: !houseImageLoaded ? "none" : "inline" }}
                                fetchpriority="high"
                            />
                        </>
                    </a>
                    <header

                    >
                        <h4><a href={process.env.AIRBNB_ROOM1} target="blank">Abiza Homestay</a> <aside>⭐ (4.5)</aside></h4>
                        <blockquote >Starts from <aside>₱ 953.00</aside></blockquote>
                    </header>
                </motion.section>
                <>
                    <Blurhash className="backgroundimg"
                        hash="LBK.VG004m$y1U^Yn0$^05%g-inK"
                        punch={1}
                        style={{ display: beachImageLoaded ? "none" : "inline" }}
                        width={589.46}
                        height={415.53}
                    />
                    <img className="backgroundimg"
                        src={beachImage}
                        alt="One of the travel destinations - Subic Beach"
                        style={{ display: !beachImageLoaded ? "none" : "inline" }}
                        sizes="(max-width: 544px) 100vw, 50vw"
                        fetchpriority="high"
                    />
                </>
                {/* <img id="promotelogo" src={logo} loading="lazy"></img> */}
            </section>
        </>

    )
}

export default HeaderSection;
