"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
          About me
        </motion.h2>

        <motion.p variants={itemVariants} className="text-gray-300 text-lg mb-12 leading-relaxed">
          Web developer with over 3 years of experience in designing and implementing modern websites. My main expertise is working with JavaScript, React, and Next.js, and I value clean and functional user interface design. During this time, I have worked on various projects, ranging from personal tools to online stores
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="btn-primary px-6 py-3 rounded-full font-medium text-white relative overflow-hidden group"
          >
            <span className="relative z-10">Download Resume</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="absolute -inset-full top-0 left-0 h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
          </a>
          <a href="#contact" className="btn-secondary px-6 py-3 rounded-full font-medium text-white">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
