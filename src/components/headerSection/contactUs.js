import React from "react";
import { motion } from "framer-motion";
import { dashBoardVariant } from "./animationVariants";
// import WeatherWidget from "./weatherWidget";
// import ClockWidget from "./clockWidget";
// import ErrorBoundary from "../errorHandling/ErrorBoundary";
// import WeatherWidgetError from "../errorHandling/weatherWidgetError";
import bookingDotComAward from "../../assets/Digital-Award-TRA-2024.png"
import airbnbSuperHost from "../../assets/airbnbsuperhost.gif"

export function ContactUs() {
    return (
        <section id="contactus">
            <motion.address
                variants={dashBoardVariant}
                initial="hidden"
                animate="visible"
            >
                {/* <ClockWidget />
                <ErrorBoundary fallback={<WeatherWidgetError />}>
                    <WeatherWidget />
                </ErrorBoundary> */}
                <dl>
                    <dt>Booking.com awards</dt>
                    <dd>
                        <img
                            src={bookingDotComAward}
                            loading="lazy"
                            decoding="async"
                            role="presentation"
                            fetchpriority="low"
                        />
                    </dd>
                </dl>
                <dl>
                    <dt>Airbnb superhost</dt>
                    <dd>
                        <img
                            src={airbnbSuperHost}
                            loading="lazy"
                            decoding="async"
                            role="presentation"
                            fetchpriority="low"
                        />
                    </dd>
                </dl>
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
    )
}