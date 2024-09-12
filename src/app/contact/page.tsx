"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { ChevronDown, ArrowRight, Sofa, Bed, Table, Lamp } from "lucide-react" 
import Image from 'next/image'  // Import the Image component
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/footer/Footer'

export default function ContentLandingPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const contentCategories = [
    { title: "Living Room", icon: Sofa, description: "Discover cozy sofas and stylish coffee tables." },
    { title: "Bedroom", icon: Bed, description: "Find the perfect bed frame and nightstands." },
    { title: "Dining Room", icon: Table, description: "Explore elegant dining sets and china cabinets." },
    { title: "Lighting", icon: Lamp, description: "Illuminate your space with our designer lamps." },
  ]

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />
     <Navbar/>

      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden" style={{
            backgroundImage: 'url(/keypoints/key.gif)',
            marginTop: '2%'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover Furniture Trends</h1>
            <p className="text-xl md:text-2xl mb-8">Explore our curated collection of design inspirations</p>
            <a
              href="#categories"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors inline-flex items-center"
            >
              Start Exploring <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            <motion.div
              className="w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
              style={{ y }}
            ></motion.div>
          </div>
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute bottom-10 z-10"
          >
            <ChevronDown size={40} />
          </motion.div>
        </section>

        <section id="categories" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Content Categories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-700 p-6 rounded-lg flex flex-col items-center text-center group hover:bg-purple-600 transition-colors duration-300"
                >
                  <category.icon size={48} className="text-purple-500 mb-4 group-hover:text-white transition-colors duration-300" />
                  <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="featured" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Featured Content
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-purple-500 opacity-20"></div>
                  <Image src="/wood.jpg" alt="Featured Article" fill className="object-cover" /> {/* Optimized image */}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Top 10 Living Room Designs of 2023</h3>
                  <p className="text-gray-400 mb-4">Explore the most inspiring living room setups that blend comfort and style.</p>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Read More →</a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-purple-500 opacity-20"></div>
                  <Image src="/About/craft.jpeg" alt="Featured Video" fill className="object-cover" /> {/* Optimized image */}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">DIY Furniture Restoration Guide</h3>
                  <p className="text-gray-400 mb-4">Learn how to breathe new life into old furniture pieces with our step-by-step video guide.</p>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Watch Video →</a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="subscribe" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Stay Inspired</h2>
              <p className="text-xl mb-8">Subscribe to our newsletter for the latest furniture trends and design tips.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>

      </main>

     <Footer/>
    </div>
  )
}
