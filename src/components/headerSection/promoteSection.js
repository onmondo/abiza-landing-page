import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import homestay from '../../assets/homestay.png';
import { PriceTag } from "../common/pricetag";

const promoteVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0, opacity: 1,
        transition: { duration: 0.8, type: "tween" }
    },
    hover: {
        scale: 2.8,
        boxShadow: "0px 0px 12px 4px rgb(249, 247, 222)",
        // borderColor: "rgb(131 217 209)",
        transition: {
            duration: 0.4,
            // yoyo: Infinity
        }
    }
}

export function PromoteSection() {
    const [beachImageLoaded, setBeachImageLoaded] = useState(false);
    const beachImage = 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Matnog_317.jpg';
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setBeachImageLoaded(true)
        }
        img.src = beachImage
    }, [beachImage])

    const [houseImageLoaded, setHouseImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setHouseImageLoaded(true)
        }
        img.src = homestay
    }, [homestay])

    return (
        <section id="promote">
            <motion.section
                className="homestayreview"
                variants={promoteVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, type: "tween" }}
            >
                <Link to="/partners" className="mainroom">
                    <Blurhash
                        className="profilepic"
                        hash="LVFicG9FD%sS_NIoRQn$yXW;V?s."
                        punch={1}
                        src={homestay}
                        style={{ display: houseImageLoaded ? "none" : "inline" }}
                        alt="Glimpse of the homestay"
                        width={64}
                        height={64}
                    />
                    <img
                        className="profilepic"
                        src={homestay}
                        alt="Glimpse of the homestay"
                        style={{ display: !houseImageLoaded ? "none" : "inline" }}
                        fetchpriority="high"
                    />
                </Link>
                <header>
                    <h4>Starts at</h4>
                    <Link to="/partners">
                        <PriceTag symbol={"₱"} price={"953"} className="price" />
                    </Link>
                </header>
            </motion.section>
            <>
                <Blurhash className="backgroundimg"
                    hash="LBK.VG004m$y1U^Yn0$^05%g-inK"
                    punch={1}
                    style={{ display: beachImageLoaded ? "none" : "inline" }}
                    width={589.46}
                    height={415.53}
                />
                <motion.img
                    className="backgroundimg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1.2, type: "tween" }}
                    src={beachImage}
                    alt="One of the travel destinations - Subic Beach"
                    style={{ display: !beachImageLoaded ? "none" : "inline" }}
                    sizes="(max-width: 544px) 100vw, 50vw"
                    fetchpriority="high"
                />
            </>
        </section>
    )
}