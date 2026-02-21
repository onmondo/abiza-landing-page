// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from 'framer-motion'
import { dashBoardVariant } from './animationVariants'

export function ContactUs() {
  return (
    <section id="contactus">
      <motion.address
        variants={dashBoardVariant}
        initial="hidden"
        animate="visible"
      >

      </motion.address>
    </section>
  )
}