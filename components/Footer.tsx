'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="bg-purple-900 p-4 text-center"
    >
      <p className="text-pink-400">© {new Date().getFullYear()} Our Love Story. All rights reserved.</p>
    </motion.footer>
  )
}

