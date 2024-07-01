import React from "react";
import PartnerCard from "./card";
import { motion } from "framer-motion";

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
