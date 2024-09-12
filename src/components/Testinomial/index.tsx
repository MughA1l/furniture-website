'use client';

import { motion } from "framer-motion"
import Image from "next/image";
const testimonials = [
  { name: "John Doe", role: "Furniture Store Owner", quote: "FurniFlow has transformed the way we manage our inventory. It's a game-changer!" },
  { name: "Jane Smith", role: "Interior Designer", quote: "The customization tools have allowed us to offer unique designs to our clients effortlessly." },
  { name: "Mike Johnson", role: "Sales Manager", quote: "The sales analytics have provided invaluable insights, helping us boost our revenue significantly." }
]

export default function Testimonials() {
  return (
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <p className="text-lg mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center">
              <div className="w-12 h-9 bg-purple-200 rounded-full mr-4 overflow-hidden">
  <Image
    src="/testinomial/testi.png"
    alt="hjj"
    width={48} // Adjust the size to fit within the 48px (12 * 4 = 48px) container
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
  )
}