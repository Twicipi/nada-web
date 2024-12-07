'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow container mx-auto py-8 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8 text-pink-400"
        >
          Halo Nada!
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-lg mb-4">
              The first time we met, I couldn't believe I was meeting an angel. You're the only one I truly adore, the person I want to be with forever.
              Out of everyone out there, I don’t know how it happened, but I just knew from the moment we met.
              Even now, I still love you just as much. I love your voice, the way you laugh, and everything about you.
              You have such a cute face, and every time I see it, my heart skips a beat. Being with you feels like the best thing that’s ever happened to me.
              Thank you for coming into my life, for making every day brighter and every moment sweeter. You make everything feel special, just by being you. I can't imagine my life without you in it.
            </p>
            <p className="text-lg">
              wipi sayang nada, unch...............................
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg"
              alt="A lovely photo of us"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  )
}

