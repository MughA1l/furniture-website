"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ChevronDown, CheckCircle, ArrowRight, Star, Truck, Settings, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import dynamic from 'next/dynamic'

// Dynamically import Navbar and Footer
const Navbar = dynamic(() => import('@/components/Navbar/Navbar'), { ssr: false })
const Footer = dynamic(() => import('@/components/footer/Footer'), { ssr: false })

export default function Component() {
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

  const services = [
    { title: "Inventory Management", icon: Truck, description: "Efficiently track and manage your furniture stock with our advanced inventory system." },
    { title: "Customer Relationship", icon: Star, description: "Build lasting relationships with your clients using our CRM tools tailored for furniture retailers." },
    { title: "Sales Analytics", icon: CheckCircle, description: "Gain valuable insights into your sales performance with our powerful analytics dashboard." },
    { title: "Furniture Customization", icon: Settings, description: "Offer unique furniture designs with our customization tools and manage custom orders effortlessly." }
  ]

  const features = [
    "Real-time Inventory Tracking",
    "AI-powered Sales Forecasting",
    "Seamless Integration with E-commerce Platforms",
    "Customizable Reporting Dashboard",
    "Multi-location Stock Management",
    "Customer Feedback and Review System",
    "Automated Reordering System"
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />
     <Navbar/>
      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Revolutionize Your Furniture Business</h1>
            <p className="text-xl md:text-2xl mb-8">Streamline operations, boost sales, and delight customers</p>
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors inline-flex items-center"
            >
              Get Started <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-3xl"
          />
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute bottom-10"
          >
            <ChevronDown size={40} />
          </motion.div>
        </section>

        <section id="services" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-700 p-6 rounded-lg flex flex-col items-center text-center"
                >
                  <service.icon size={48} className="text-purple-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="flex items-center space-x-4"
                  >
                    <CheckCircle className="text-purple-500 flex-shrink-0" size={24} />
                    <span className="text-xl">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-full min-h-[300px] rounded-lg overflow-hidden"
              >
                <Image
                  src="/keypoints/key.gif?height=600&width=800"
                  alt="Furniture Management Dashboard"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              What Our Clients Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "John Doe", role: "Furniture Store Owner", quote: "FurniFlow has transformed the way we manage our inventory. It&apos;s a game-changer!" },
                { name: "Jane Smith", role: "Interior Designer", quote: "The customization tools have allowed us to offer unique designs to our clients effortlessly." },
                { name: "Mike Johnson", role: "Sales Manager", quote: "The sales analytics have provided invaluable insights, helping us boost our revenue significantly." }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-700 p-6 rounded-lg"
                >
                  <p className="text-lg mb-4">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center">
                  <div className="w-12 h-9 bg-purple-200 rounded-full mr-4 overflow-hidden">
  <Image
    src="/testinomial/testi.png"
    alt="hjj"
    width={48}
    height={48}
    className="object-cover"
  />
</div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Get in Touch
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center"><Phone className="mr-2" size={20} /> +1 (555) 123-4567</p>
                  <p className="flex items-center"><Mail className="mr-2" size={20} /> info@furniflow.com</p>
                  <p className="flex items-center"><MapPin className="mr-2" size={20} /> 123 Furniture Lane, Design District, NY 10001</p>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                  </div>
                </div>
              </motion.div>
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-700 text-white" />
                <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-700 text-white" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

     <Footer/>
    </div>
  )
}