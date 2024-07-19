import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { containerVariant, listVariants } from "./animationVariants"
import { ViewAmenity } from "../components/amenities/viewAmenity";

function Amenities(props) {
    const { amenities } = props;
    const firstAmenities = amenities.slice(0, 4)
    const secondAmenities = amenities.slice(4)

    const imageRef = useRef(null)
    const popoverRef = useRef(null);
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState({});
    const [selectedAmenity, setSelectedAmenity] = useState("")
    const [selectedAlt, setSelectedAlt] = useState("")

    const onViewImage = ({ src, alt }) => {

        const imgRect = imageRef.current.getBoundingClientRect();
        setPosition({
            top: imgRect.bottom,
            left: imgRect.left + imgRect.width / 2,
        });

        setShow(!show);
        setSelectedAmenity(src)
        setSelectedAlt(alt)
    };

    return (
        <>
            <motion.section
                id="amenitiesPage"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.ul variants={listVariants} initial="hidden" animate="visible" id="firstAmenities">
                    {
                        firstAmenities.map(({ src, alt }, index) => {
                            return (
                                <motion.li key={index} variants={listVariants}>
                                    <img src={src}
                                        alt={alt}
                                        loading="lazy"
                                        decoding="async"
                                        role="presentation"
                                        ref={imageRef}
                                        fetchpriority="low"
                                        onClick={() => { onViewImage({ src, alt }) }}
                                    />
                                </motion.li>

                            )
                        })
                    }
                </motion.ul>
                <motion.ul variants={listVariants} initial="hidden" animate="visible" id="secondAmenities">
                    {
                        secondAmenities.map(({ src, alt }, index) => {
                            return (
                                <motion.li key={index} variants={listVariants}>
                                    <img src={src}
                                        alt={alt}
                                        loading="lazy"
                                        decoding="async"
                                        role="presentation"
                                        fetchpriority="low"
                                        ref={imageRef}
                                        onClick={() => { onViewImage({ src, alt }) }}
                                    />
                                </motion.li>

                            )
                        })
                    }
                </motion.ul>
            </motion.section>
            {(show) ? <ViewAmenity position={position} popoverRef={popoverRef} onViewImage={onViewImage} amenity={selectedAmenity} alt={selectedAlt} /> : ""}
        </>

    )
}

export default Amenities;
