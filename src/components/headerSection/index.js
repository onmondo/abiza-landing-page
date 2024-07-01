import React from "react";
import { motion } from "framer-motion";
import { ContactUs } from "./contactUs";
import { PromoteSection } from "./promoteSection";

function HeaderSection() {
    // console.count('component HeaderSection rendered!');

    return (
        <>
            <article id="aboutme">
                <header>
                    <motion.h1
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1.2 }}
                    >
                        Discover Tranquility
                        {/* <span className="titlefirst">Discover</span>
                        <span className="titlesecond">Tranquility</span> */}
                    </motion.h1>
                    <p className="description">At ABIZA Homestay, you can easily travel to Matnog Port because our location is just off the highway and 7 kilometers from the port. And since Sorsogon's beaches and tourist attractions are close to our place, you will surely enjoy and unwind while staying with us.</p>
                    <p className="description">Your Homestay Journey Begins Here.</p>
                </header>
                <ContactUs />
            </article>
            <PromoteSection />
        </>

    )
}

export default HeaderSection;
