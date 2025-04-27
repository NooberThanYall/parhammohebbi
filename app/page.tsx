"use client"

import { useEffect, useRef } from "react"
import { useScroll } from "framer-motion"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Cursor from "@/components/cursor"
import ParticleBackground from "@/components/particle-background"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Cursor ref={cursorRef} />
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Navbar scrollYProgress={scrollYProgress} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
