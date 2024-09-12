'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const logos = [
  { name: 'Cozy Home', icon: '🛋️', color: 'bg-amber-700', text: 'text-black' },
  { name: 'Modern Living', icon: '🪑', color: 'bg-slate-700', text: 'text-black' },
  { name: 'Rustic Charm', icon: '🪵', color: 'bg-green-900', text: 'text-black' },
  { name: 'Elegant Spaces', icon: '🛏️', color: 'bg-purple-900', text: 'text-black' },
]

export default function FurnitureLogoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length)
  }

  return (
    <div className={`relative w-full h-screen ${logos[currentIndex].color} transition-colors duration-1000 overflow-hidden`}>
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${logos[currentIndex].text} opacity-10`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 5}px`,
              height: `${Math.random() * 200}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${10 + Math.random() * 20}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Logo slider */}
      <div className="relative w-full h-full flex items-center justify-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`absolute w-96 h-96 transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className={`w-full h-full ${logo.color} bg-opacity-50 rounded-3xl flex items-center justify-center shadow-2xl`}>
              <div className={`w-88 h-88 ${logo.text} bg-opacity-20 rounded-2xl flex items-center justify-center`}>
                <div className="w-80 h-80 bg-white rounded-xl flex flex-col items-center justify-center">
                  <span className="text-8xl mb-4">{logo.icon}</span>
                  <h2 className={`text-3xl font-bold text-center ${logo.color.replace('bg-', 'text-')}`}>{logo.name}</h2>
                  <p className={`text-xl mt-2 ${logo.color.replace('bg-', 'text-')}`}>FURNITURE</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-3 rounded-full"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-3 rounded-full"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </div>
  )
}