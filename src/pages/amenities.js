import React from "react";
import { motion } from "framer-motion";
import { containerVariant, listVariants } from "./animationVariants"

function Amenities(props) {
    const { amenities } = props;
    const firstAmenities = amenities.slice(0, 4)
    const secondAmenities = amenities.slice(4)

    return (
        <motion.section
            id="amenitiesPage"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.ul variants={listVariants} initial="hidden" animate="visible" id="firstAmenities">
                {
                    firstAmenities.map((amenity, index) => {
                        return (
                            <motion.li key={index} variants={listVariants}>
                                <img src={amenity.src}
                                    alt={amenity.alt}
                                    loading="lazy"
                                    decoding="async"
                                    role="presentation"
                                    fetchpriority="low"
                                />
                            </motion.li>

                        )
                    })
                }
            </motion.ul>
            <motion.ul variants={listVariants} initial="hidden" animate="visible" id="secondAmenities">
                {
                    secondAmenities.map((amenity, index) => {
                        return (
                            <motion.li key={index} variants={listVariants}>
                                <img src={amenity.src}
                                    alt={amenity.alt}
                                    loading="lazy"
                                    decoding="async"
                                    role="presentation"
                                    fetchpriority="low"
                                />
                            </motion.li>

                        )
                    })
                }
            </motion.ul>
        </motion.section>
    )
}

export default Amenities;
