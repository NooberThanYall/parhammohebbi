"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "FullStack Todo App – Auth & API",
    description:
      "Todo App with Authentication (JWT) That Stores The Tasks And User Settings To The Database. You can Also Create Routines so You dont have to Overwrite Your Tasks Each Day.",
    image: "/images/Screenshot (98).png",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Full Stack Ecommerce & Blog",
    description: "An Ecommerce with a blog, having an admin panel as a CMS to control the content of the website",
    image: "/images/Screenshot (185).png",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Backend Of GiahLand",
    description: "A robust backend system for managing plant inventory and sales",
    image: "/Screenshot (121).png",
    tags: ["Node.js", "Express", "MongoDB", "Docker"],
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  return (
    <section id="works" ref={ref} className="py-20">
      <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.h2 variants={titleVariants} className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          My Creations
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className={`grid grid-cols-1 ${
                index % 2 === 0 ? "lg:grid-cols-[1fr,1.2fr]" : "lg:grid-cols-[1.2fr,1fr]"
              } gap-8 items-center`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="project-card rounded-lg overflow-hidden relative group"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500" />
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[#0e1016] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="p-4">
                        <p className="text-white font-medium">View Project</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  className="text-gray-300 mb-6"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  className="flex flex-wrap gap-2 mb-8"
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-[#1a1c25] rounded-full text-sm text-gray-300"
                      whileHover={{
                        backgroundColor: "#a742f5",
                        color: "white",
                        scale: 1.05,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                >
                  <a
                    href="#"
                    className="btn-primary px-6 py-3 rounded-full font-medium text-white inline-flex items-center relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      View Project <span className="ml-2">→</span>
                    </span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <span className="absolute -inset-full top-0 left-0 h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
