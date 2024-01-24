import React from "react";
import { motion, AnimatePresence } from 'framer-motion';

function AmenitiesModal(props) {
    const { amenities, state, viewImage } = props;
    const firstAmenities = amenities.slice(0, 4)
    const secondAmenities = amenities.slice(4)

    const backdropVariant = {
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
            }
        },
        hidden: { opacity: 0 }
    }
    return (
        <AnimatePresence>
            <motion.section
                className="modal"
                id="amenitiesModal"
                variants={backdropVariant}
                style={{ visibility: state.visibility }}
                initial="hidden"
                animate="visible"
            >
                <header>
                    <a href="#amenities" onClick={() => { viewImage(event, 'closeAmenities', state.selectedAmenity, state.selectedAlt, state.selectedHash) }}>
                        Close [X]
                    </a>
                </header>
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
        </AnimatePresence>
    )
}

export default AmenitiesModal;
