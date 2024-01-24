import React from "react";
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        x: '30vw',
        opacity: 0
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    },
    exit: {
        x: '30vw',
        opacity: 0,
        transition: { duration: 1, ease: 'easeInOut' }
    }
}

function Amenities(props) {
    const { amenities } = props;
    const firstAmenities = amenities.slice(0, 4)
    const secondAmenities = amenities.slice(4)

    return (
        <motion.section
            id="amenitiesPage"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ul id="firstAmenities">
                {
                    firstAmenities.map((amenity, index) => {
                        return (
                            <li key={index}>
                                <img src={amenity.src}
                                    alt={amenity.alt}
                                    loading="lazy"
                                    decoding="async"
                                    role="presentation"
                                    fetchpriority="low"
                                />
                            </li>

                        )
                    })
                }
            </ul>
            <ul id="secondAmenities">
                {
                    secondAmenities.map((amenity, index) => {
                        return (
                            <li key={index}>
                                <img src={amenity.src}
                                    alt={amenity.alt}
                                    loading="lazy"
                                    decoding="async"
                                    role="presentation"
                                    fetchpriority="low"
                                />
                            </li>

                        )
                    })
                }
            </ul>
        </motion.section>
    )
}

export default Amenities;
