import React from "react";
import PartnerCard from "./card";
import { motion } from "framer-motion";

const cardVariants = {
    hover: {
        scale: 1.1,
        boxShadow: "0px 0px 10px rgb(250 205 8)",
        borderColor: "rgb(250 205 8)",
        transition: {
            duration: 0.4,
            // yoyo: Infinity
        }
    }
}
function PartnerCards(props) {
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
                        <PartnerCard partner={partner} />
                    </motion.dl>
                )
            })}

        </address>
    )
}

export default PartnerCards;
