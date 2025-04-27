"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  { name: "JavaScript", color: "#F7DF1E", textColor: "#000000", shortName: "JS" },
  { name: "React", color: "#61DAFB", textColor: "#000000", shortName: "R" },
  { name: "Next.js", color: "#000000", textColor: "#FFFFFF", shortName: "N" },
  { name: "Tailwind", color: "#38B2AC", textColor: "#FFFFFF", shortName: "TW" },
  { name: "Node.js", color: "#339933", textColor: "#FFFFFF", shortName: "N" },
  { name: "TypeScript", color: "#3178C6", textColor: "#FFFFFF", shortName: "TS" },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.1,
      },
    }),
  }

  return (
    <section id="skills" ref={ref} className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center"
      >
        <motion.h2 variants={titleVariants} className="text-4xl md:text-5xl font-bold mb-16 gradient-text">
          My Skills
        </motion.h2>

        <motion.div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={skillVariants}
              whileHover={{
                y: -10,
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              className="skill-icon relative"
            >
              <motion.div
                className="absolute -inset-2 rounded-full blur-md"
                style={{ backgroundColor: skill.color, opacity: 0.3 }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: index * 0.2,
                }}
              />
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-lg font-bold relative z-10"
                style={{
                  backgroundColor: skill.color,
                  color: skill.textColor,
                }}
              >
                {skill.shortName}
              </div>
              <p className="mt-2 text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
