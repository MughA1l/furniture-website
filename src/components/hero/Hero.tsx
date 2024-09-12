'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function FurnitureHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const textY = useTransform(scrollY, [0, 500], [0, -50])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 text-white ">
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="/gif-capa.jpeg?height=1080&width=1820"
          alt="Luxury Furniture"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 mt-4">
        <motion.h1 
          className="text-6xl md:text-9xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ y: textY }}
        >
          FURNITURE
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ y: textY }}
        >
          DISCOVER THE ELEGANCE OF
        </motion.p>
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <IconButton icon="🛋️" text="LIVING" />
          <IconButton icon="🛏️" text="BEDROOM" />
          <IconButton icon="🪑" text="DINING" />
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-t border-white/20"
            style={{
              left: 0,
              right: 0,
              top: `${(i + 1) * 5}%`,
              rotate: `${Math.sin(i * 0.5) * 5}deg`,
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + i,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute w-64 h-64 rounded-full bg-white/10 pointer-events-none"
        style={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
          mixBlendMode: 'difference',
        }}
      />
    </div>
  )
}

function IconButton({ icon, text }: { icon: string; text: string }) {
  return (
    <button className="flex flex-col items-center hover:text-gray-300 transition-colors">
      <span className="text-4xl mb-2">{icon}</span>
      <span className="text-sm">{text}</span>
    </button>
  )
}