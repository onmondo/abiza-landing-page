import React, { useReducer, useState, useEffect } from 'react'
import "../../styles/amenities.css";
// import AmenitiesModal from './modal';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";
import FeaturedAmenity from "./featuredAmenity";
// import bookingDotComAward from "../../assets/Digital-Award-TRA-2024.png"

const featureVariant = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1,
        transition: {
            duration: 0.6
        }
    }
}

// const scaleVariants = {
//     scaleup: {
//         y: 0,
//         opacity: 1,
//         display: "inline",
//         transition: {
//             duration: 0.8
//         }
//     },
//     scaledown: {
//         y: 50,
//         opacity: 0,
//         display: "none",
//         transition: {
//             duration: 0.6
//         }
//     }
// }

const containerVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.6
        }
    }
}

function Amenities(props) {
    const { amenities } = props
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'preViewAmenity':
                return {
                    selectedAmenity: action.amenity,
                    selectedAlt: action.alt,
                    selectedHash: action.hash,

                };
            case 'viewAmenities':
                return {
                    selectedAmenity: action.amenity,
                    selectedAlt: action.alt,
                    selectedHash: action.hash,

                }
            case 'closeAmenities':
                return {
                    selectedAmenity: action.amenity,
                    selectedAlt: action.alt,
                    selectedHash: action.hash,

                }
            default:
                throw new Error();
        }
    }, {
        selectedHash: amenities[0].hash,
        selectedAmenity: amenities[0].src,
        selectedAlt: amenities[0].alt,
    });

    const viewImage = (event, type, amenity, alt, hash) => {
        event.preventDefault()
        dispatch({ type, amenity, alt, hash });
    };

    const [featureImageLoaded, setFeatureImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setFeatureImageLoaded(true)
        }
        img.src = state.selectedAmenity
    }, [state.selectedAmenity])

    const lastAmenityItem = () => {
        const amenity = amenities[4];
        const totalAmenities = amenities.length;
        const remainingAmenities = totalAmenities - 4;
        return (
            <motion.li
                className="lastAmenityItem"
                key={4}
                variants={featureVariant}
                initial="hidden"
                animate="visible"
            >
                <img src={amenity.src}
                    className="amenityselection"
                    alt={amenity.alt}
                    loading="lazy"
                    decoding="async"
                    role="presentation"

                    onClick={() => { viewImage(event, 'preViewAmenity', amenity.src, amenity.alt, amenity.hash) }}
                />
                <Link to="/amenities">Show all photos ({remainingAmenities})</Link>
            </motion.li>
        )
    }

    return (
        <motion.section
            id="amenities"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <header>
                <h2>Intimate Comfort, Memorable Stay</h2>
                {/* <p className="description">Step into a world of comfort at our homestay, where each detail is designed for your relaxation. Our cozy retreat boasts two inviting bedrooms, each generously accommodating up to three guests. Sink into plush bedding and enjoy a peaceful night's sleep in a space tailored for your utmost comfort.</p> */}
                <p className="description">Discover comfort at our homestay with two inviting bedrooms for up to three guests each. Enjoy plush bedding and a peaceful night's sleep. Our spacious comfort room with a refreshing shower provides a tranquil escape and all amenities for a rejuvenating stay.</p>
                <p className="description">At {props.websiteName}, we redefine hospitality, ensuring your visit is not just a stay but a collection of unforgettable moments. Welcome to a home where comfort meets charm.</p>
            </header>
            {/* <motion.a
                id="awards"
                variants={featureVariant}
                initial="hidden"
                animate="visible"
                href="https://www.booking.com/traveller-review-awards"
                target="_blank"
            >
                <img
                    src={bookingDotComAward}
                    loading="lazy"
                    decoding="async"
                    role="presentation"
                    fetchpriority="low"
                />
            </motion.a> */}

            <ul>
                <FeaturedAmenity amenities={amenities} shown={featureImageLoaded} state={state} />
                <li className="otherpic">
                    <ul>
                        {
                            amenities.map((amenity, index) => {
                                if (index < 3) {
                                    if (index === 0) {
                                        return (
                                            <motion.li
                                                className="firstAmenityItem"
                                                key={index}
                                                variants={featureVariant}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                <img src={amenity.src}
                                                    className="amenityselection"
                                                    alt={amenity.alt}
                                                    loading="lazy"
                                                    decoding="async"
                                                    role="presentation"
                                                    fetchpriority="low"
                                                    onClick={() => { viewImage(event, 'preViewAmenity', amenity.src, amenity.alt, amenity.hash) }}
                                                />
                                            </motion.li>
                                        )
                                    }
                                    return (
                                        <motion.li
                                            key={index}
                                            variants={featureVariant}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <img src={amenity.src}
                                                className="amenityselection"
                                                alt={amenity.alt}
                                                loading="lazy"
                                                decoding="async"
                                                role="presentation"
                                                fetchpriority="low"
                                                onClick={() => { viewImage(event, 'preViewAmenity', amenity.src, amenity.alt, amenity.hash) }}
                                            />
                                        </motion.li>
                                    )
                                }
                            })
                        }
                        {lastAmenityItem()}
                    </ul>
                </li>
            </ul>
        </motion.section>
    )
}

export default Amenities;