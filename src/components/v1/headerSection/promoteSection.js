// eslint-disable-next-line no-unused-vars
import React, { useState, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { Blurhash } from 'react-blurhash'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import homestay from '../../assets/homestay.png'
import logo from '../../assets/logo-transparent.png'
import { PriceTag } from '../common/pricetag'
import { promoteVariant } from './animationVariants'
import { headerSectionData } from './constant'

const visitstatsVariant = {
  ...promoteVariant,
  visible: {
    ...promoteVariant.visible,
    transition: { duration: 1.2, type: 'tween' }
  },
  hover: {
    ...promoteVariant.hover,
    transition: { duration: 0.8 }
  }
}

export function PromoteSection() {
  const [beachImageLoaded, setBeachImageLoaded] = useState(false)
  const {
    beachImage,
    beachDesc,
    topHost,
    currency,
    price,
    bookings,
    tophost
  } = headerSectionData

  useLayoutEffect(() => {
    const img = new Image()
    img.onload = () => {
      setBeachImageLoaded(true)
    }
    img.src = beachImage
  }, [beachImage])

  const [houseImageLoaded, setHouseImageLoaded] = useState(false)

  useLayoutEffect(() => {
    const img = new Image()
    img.onload = () => {
      setHouseImageLoaded(true)
    }
    img.src = homestay
  }, [homestay])

  return (
    <section id="promote">
      <motion.section
        className="homestayprice"
        variants={promoteVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, type: 'tween' }}
      >
        <Link to="/partners" className="mainroom">
          <Blurhash
            hash="LVFicG9FD%sS_NIoRQn$yXW;V?s."
            punch={1}
            src={homestay}
            style={{ display: houseImageLoaded ? 'none' : 'inline' }}
            alt="Glimpse of the homestay"
            width={64}
            height={64}
          />
          <img
            className="profilepic"
            src={homestay}
            alt="Glimpse of the homestay"
            style={{ display: !houseImageLoaded ? 'none' : 'inline' }}
            fetchpriority="high"
          />
        </Link>
        <header>
          <Link to="/partners">
            <h4>Starts at</h4>
            <PriceTag symbol={currency} price={price} className="price" />
          </Link>
        </header>
      </motion.section>
      <motion.section
        className="visitstats"
        variants={visitstatsVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2, duration: 1, type: 'tween' }}
      >
        {/* <Link to="/partners" className="mainroom"> */}
        <img
          className="profilepic"
          src={logo}
          alt="Abiza Homestay Logo"
          style={{ display: !houseImageLoaded ? 'none' : 'inline' }}
          fetchpriority="high"
        />
        {/* </Link> */}
        <header>
          <Link to="/partners">
            <h4>Visits</h4>
            <blockquote className="quantity">{`+${bookings}`}</blockquote>
          </Link>
        </header>
      </motion.section>
      <motion.section
        className="rewards"
        variants={visitstatsVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2, duration: 1, type: 'tween' }}
      >
        <img
          className="profilepic"
          src={topHost}
          alt={tophost.agoda}
          // style={{ display: !houseImageLoaded ? "none" : "inline" }}
          fetchpriority="high"
        />
        <header>
          {/* <Link to="/partners">
                        <h4>Visits</h4>
                        <blockquote className="quantity">+{121 + 68 + 137}</blockquote>
                    </Link> */}
          <p>{tophost.agoda}</p>
        </header>
      </motion.section>
      <>
        <Blurhash
          hash="LBK.VG004m$y1U^Yn0$^05%g-inK"
          punch={1}
          style={{ display: beachImageLoaded ? 'none' : 'inline' }}
          width={589.46}
          height={415.53}
        />
        <motion.img
          className="backgroundimg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2, type: 'tween' }}
          src={beachImage}
          alt={beachDesc}
          style={{ display: !beachImageLoaded ? 'none' : 'inline' }}
          sizes="(max-width: 544px) 100vw, 50vw"
          fetchpriority="high"
        />
      </>
    </section>
  )
}