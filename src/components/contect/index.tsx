"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function GetInTouch() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center "
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
                <a href="#" className="text-gray-900 hover:text-amber-400 transition-colors"><Facebook size={24} /></a>
                <a href="#" className="text-gray-900 hover:text-amber-400  transition-colors"><Twitter size={24} /></a>
                <a href="#" className="text-gray-900 hover:text-amber-400  transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-gray-900 hover:text-amber-400 transition-colors"><Linkedin size={24} /></a>
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
  )
}