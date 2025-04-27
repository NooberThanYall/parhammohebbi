"use client"

import { forwardRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

type CursorProps = {}

const Cursor = forwardRef<HTMLDivElement, CursorProps>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHoveringLink, setIsHoveringLink] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleLinkHoverStart = () => setIsHoveringLink(true)
    const handleLinkHoverEnd = () => setIsHoveringLink(false)

    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Track hover state on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverStart)
      el.addEventListener("mouseleave", handleLinkHoverEnd)
    })

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart)
        el.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        backgroundColor: "white",
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isClicking ? 0.8 : isHoveringLink ? 1.5 : 1,
      }}
      transition={{
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
      }}
    />
  )
})

Cursor.displayName = "Cursor"

export default Cursor
