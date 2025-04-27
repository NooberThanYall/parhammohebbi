"use client"

import type React from "react"

import "./globals.css"
import { Inter } from "next/font/google"
import { AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0e1016] text-white`}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  )
}
