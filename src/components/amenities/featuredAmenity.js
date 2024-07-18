import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";

const scaleVariants = {
    scaleup: {
        y: 0,
        opacity: 1,
        display: "inline",
        transition: {
            duration: 0.8
        }
    },
    scaledown: {
        y: 20,
        opacity: 0,
        display: "none",
        transition: {
            duration: 0.6
        }
    }
}

function FeaturedAmenity(props) {
    const { amenities, shown, state } = props;
    const imageRef = useRef(null)
    const popoverRef = useRef(null);
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState({});

    const onViewImage = (e) => {
        const imgRect = imageRef.current.getBoundingClientRect();
        setPosition({
            top: imgRect.bottom,
            left: imgRect.left + imgRect.width / 2,
        });

        console.log(position)
        setShow(!show);
    };

    console.log("selected amenity: ", state)
    return (
        <>
            {
                amenities.map((amenity, index) => {
                    return (
                        <motion.li
                            className="feature"
                            autoFocus
                            variants={scaleVariants}
                            initial="scaledown"
                            animate={state.selectedAlt === amenity.alt || state.selectedAlt == undefined ? "scaleup" : "scaledown"}
                            exit="scaledown"
                            key={index}
                        >
                            {(state.selectedHash) ? <Blurhash
                                hash={state.selectedHash}
                                punch={1}
                                src={state.selectedAmenity}
                                style={{ display: shown ? "none" : "inline" }}
                                loading="lazy"
                                decoding="async"
                                role="presentation"
                                alt={state.selectedAlt}
                                width={656}
                                height={656}
                            /> : <></>}

                            <motion.img
                                src={state.selectedAmenity}
                                loading="lazy"
                                decoding="async"
                                role="presentation"
                                fetchpriority="low"
                                alt="Featured amenity - entire house"
                                // style={{ display: !featureImageLoaded ? "none" : "inline" }}
                                variants={scaleVariants}
                                ref={imageRef}
                                onClick={onViewImage}
                                style={{ cursor: 'pointer' }}
                            />
                        </motion.li>
                    )
                })
            }
            {(show)
                ?
                <>
                    <div className="backdrop" onClick={onViewImage}></div>
                    <div
                        className="popover"
                        ref={popoverRef}
                        style={{
                            position: 'fixed',
                            // top: '100%',
                            top: `${position.top}`,
                            // color: "canvastext",
                            // overflow: "auto",
                            left: `${position.left}`,
                            transform: 'translateX(50%)',
                            zIndex: 3,
                        }}
                    >
                        <div className="popover-content">
                            <img className="display" src={state.selectedAmenity} alt={state.selectedAlt} />
                        </div>
                    </div>
                </>
                :
                ""
            }
        </>
    )
}

export default FeaturedAmenity;
