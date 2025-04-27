"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  const ref = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  const codeVariants = {
    hidden: { opacity: 0, x: 100, rotate: 0 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 5,
      transition: {
        duration: 1,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 0.6,
      },
    },
  }

  return (
    <section id="home" ref={ref} className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Creative
          </motion.h1>
          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Designer &
          </motion.h1>
          <motion.h1
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-8"
          >
            Developer.
          </motion.h1>

          <motion.p
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-300 text-lg mb-10 max-w-lg"
          >
            Hi, I'm a passionate Next.JS Fullstack Developer based in The Land Of Persia.
          </motion.p>

          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#works"
              className="btn-primary px-6 py-3 rounded-full font-medium text-white relative overflow-hidden group"
            >
              <span className="relative z-10">SEE MY WORKS →</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="absolute -inset-full top-0 left-0 h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
            </Link>
          </motion.div>

          <motion.div
            custom={5}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 flex items-center space-x-6"
          >
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              Dribbble
            </Link>
            <span className="text-gray-600">/</span>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              Behance
            </Link>
            <span className="text-gray-600">/</span>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              GitHub
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={codeVariants}
          initial="hidden"
          animate="visible"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${
              -mousePosition.y * 0.05
            }deg) translateZ(20px)`,
          }}
          className="code-snippet p-6 hidden lg:block relative"
        >
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          ></motion.div>
          <div className="relative bg-[#1a1c25] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm md:text-base">
              <code>
                <span className="code-keyword">const</span> parham = <span className="code-keyword">new</span>{" "}
                <span className="code-function">Developer</span>();
                <br />
                <br />
                <span className="code-keyword">while</span> (1 === 1) {"{"}
                <br />
                {"  "}
                <motion.span
                  animate={{
                    color: ["#61afef", "#c678dd", "#98c379", "#61afef"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="code-function"
                >
                  parham
                </motion.span>
                .<span className="code-function">code</span>();
                <br />
                {"  "}
                <motion.span
                  animate={{
                    color: ["#61afef", "#c678dd", "#98c379", "#61afef"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  className="code-function"
                >
                  parham
                </motion.span>
                .<span className="code-function">train</span>();
                <br />
                {"  "}
                <motion.span
                  animate={{
                    color: ["#61afef", "#c678dd", "#98c379", "#61afef"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  className="code-function"
                >
                  parham
                </motion.span>
                .<span className="code-function">sleep</span>();
                <br />
                {"}"}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-down"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  )
}
