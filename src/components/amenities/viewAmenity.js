// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from 'framer-motion'


const displayImageVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    }
  }
}

export function ViewAmenity({ position, popoverRef, onViewImage, amenity, alt }) {
  return (
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
        <motion.div variants={displayImageVariant} className="popover-content">
          <img className="display" src={amenity} alt={alt} />
        </motion.div>
      </div>
    </>
  )
}