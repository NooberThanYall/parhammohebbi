"use client"

import { motion } from "framer-motion"

export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-[#0e1016] flex items-center justify-center z-50">
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 border-4 border-transparent border-t-pink-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 border-4 border-transparent border-t-purple-300 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-2xl font-bold gradient-text">G</span>
        </motion.div>
      </div>
    </div>
  )
}
