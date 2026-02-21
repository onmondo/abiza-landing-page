// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Blurhash } from 'react-blurhash'
import { ViewAmenity } from './viewAmenity'

const scaleVariants = {
  scaleup: {
    y: 0,
    opacity: 1,
    display: 'inline',
    transition: {
      duration: 0.8
    }
  },
  scaledown: {
    y: 20,
    opacity: 0,
    display: 'none',
    transition: {
      duration: 0.6
    }
  }
}

function FeaturedAmenity(props) {
  const { amenities, shown, state } = props
  const imageRef = useRef(null)
  const popoverRef = useRef(null)
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState({})

  const onViewImage = () => {
    const imgRect = imageRef.current.getBoundingClientRect()
    setPosition({
      top: imgRect.bottom,
      left: imgRect.left + imgRect.width / 2,
    })

    setShow(!show)
  }

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
              animate={state.selectedAlt === amenity.alt || state.selectedAlt == undefined ? 'scaleup' : 'scaledown'}
              exit="scaledown"
              key={index}
            >
              {(state.selectedHash) ? <Blurhash
                hash={state.selectedHash}
                punch={1}
                src={state.selectedAmenity}
                style={{ display: shown ? 'none' : 'inline' }}
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
      {(show) ? <ViewAmenity position={position} popoverRef={popoverRef} onViewImage={onViewImage} amenity={state.selectedAmenity} alt={state.selectedAlt} /> : ''}
    </>
  )
}

export default FeaturedAmenity
