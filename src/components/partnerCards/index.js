import React, { useState } from "react";
import PartnerCard from "./card";
import { motion } from "framer-motion";
import { BookingForm } from "../common/bookingform";

const cardVariants = {
    hover: {
        scale: 1.02,
        boxShadow: "0px 0px 12px 4px rgb(131 217 209)",
        // borderColor: "rgb(131 217 209)",
        transition: {
            duration: 0.4,
            // yoyo: Infinity
        }
    }
}
function PartnerCards(props) {
    const [room, setRoom] = useState("")
    const { partners } = props
    return (
        <address>
            {partners.map((partner, index) => {
                return (
                    <motion.dl
                        key={index}
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <PartnerCard partner={partner} setRoom={setRoom} />
                    </motion.dl>
                )
            })}
            <BookingForm partner={room} />
        </address>
    )
}

export default PartnerCards;
