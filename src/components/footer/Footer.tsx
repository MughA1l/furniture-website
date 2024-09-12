'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react'

const FloatingCube = ({ delay = 0 }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rotateX: [0, 360],
      rotateY: [0, 360],
      z: [-100, 100],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
        delay
      }
    })
  }, [controls, delay])

  return (
    <motion.div
      className="absolute w-16 h-16 bg-amber-500 opacity-10"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        perspective: '1000px'
      }}
      animate={controls}
    />
  )
}

export default function AnimatedFooter3D() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <footer className="relative bg-gray-900 text-gray-300 py-16 overflow-hidden">
      <div className="absolute inset-0" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
        {[...Array(10)].map((_, i) => (
          <FloatingCube key={i} delay={i * 0.5} />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <motion.h2 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join our mailing list for updates!
            </motion.h2>
            <p className="mb-4">We don&apos;t spam, promise!</p>
            <form onSubmit={handleSubmit} className="flex">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                type="submit"
                className="bg-amber-500 text-white px-6 py-2 rounded-r"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Woodland Furniture</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Showroom</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Returns Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <p>&copy; 2023 Woodland Furniture. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Twitter className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}