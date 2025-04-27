"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </motion.p>

          <motion.div
            className="mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              Designed & Built with{" "}
              <motion.span
                animate={{
                  color: ["#f542a7", "#a742f5", "#f542a7"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                ❤️
              </motion.span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
