"use client"

import { useState, useEffect } from "react"
import { motion, type MotionValue, useTransform } from "framer-motion"
import Link from "next/link"

interface NavbarProps {
  scrollYProgress?: MotionValue<number>
}

export default function Navbar({ scrollYProgress }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const defaultBackgroundColor = "rgba(14, 16, 22, 0)"
  const scrolledBackgroundColor = "rgba(14, 16, 22, 0.8)"

  const backgroundColor = scrollYProgress
    ? useTransform(scrollYProgress, [0, 0.1], [defaultBackgroundColor, scrolledBackgroundColor])
    : undefined

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = ["Home", "About", "Works", "Contact"]

  return (
    <motion.header
      style={{ backgroundColor: backgroundColor || (isScrolled ? scrolledBackgroundColor : "transparent") }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 backdrop-blur-md" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-2xl font-bold">
              G
            </Link>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="nav-link text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:hidden"
          >
            <button className="text-white focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-4 py-3 space-y-1 bg-[#1a1c25] backdrop-blur-md">
          {navItems.map((item) => (
            <motion.div key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}
