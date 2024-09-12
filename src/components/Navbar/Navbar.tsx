'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AnimatedNavbar() {
  const [scrollY, setScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about'},
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      className="fixed w-full z-50 py-4 px-6 bg-gradient-to-r from-gray-300 to-black overflow-hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <motion.div
          className="text-white font-bold text-2xl"
          animate={{
            rotateY: scrollY * 0.5,
            scale: 1 + scrollY * 0.001,
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Image src="/icon.png" alt="j" width={50} height={100} />
        </motion.div>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <motion.a
                className="text-white hover:text-yellow-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            </Link>
          ))}
        </div>

        <div className="flex space-x-4">
          <motion.button
            className="bg-yellow-400 text-amber-900 px-4 py-2 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </div>

        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-amber-800 mt-4 p-4 rounded-lg relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <motion.a
                className="block text-white hover:text-yellow-300 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            </Link>
          ))}
        </motion.div>
      )}

      <div className="moving-background"></div>

      <style jsx>{`
        nav {
          position: relative;
        }
        .moving-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(180, 83, 9, 0.3),
            rgba(146, 64, 14, 0.3),
            rgba(180, 83, 9, 0.3),
            rgba(146, 64, 14, 0.3)
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          z-index: 1;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        nav:hover .moving-background {
          animation-duration: 10s;
        }
      `}</style>
    </motion.nav>
  )
}