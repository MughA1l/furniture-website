"use client"; // Add this directive at the top

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  "Real-time Inventory Tracking",
  "AI-powered Sales Forecasting",
  "Seamless Integration with E-commerce Platforms",
  "Customizable Reporting Dashboard",
  "Multi-location Stock Management",
  "Customer Feedback and Review System",
  "Automated Reordering System"
];

export default function KeyPoints() {
  return (
    <section id="features" className="py-20 text-black hover:text-amber-700">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center "
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
  );
}
