'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Users, Heart, Leaf, Star } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

const FloatingParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute bg-amber-500 rounded-full opacity-20"
    style={{
      width: Math.random() * 20 + 5,
      height: Math.random() * 20 + 5,
    }}
    animate={{
      x: ['-100%', '100%'],
      y: ['-100%', '100%'],
    }}
    transition={{
      duration: Math.random() * 10 + 20,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'linear',
      delay,
    }}
  />
);

export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="min-h-screen bg-gray-900 text-amber-50 relative overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}

        <header className="bg-amber-900 text-amber-50 py-6 relative z-10 mt-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Woodland Wonders</h1>
            <p className="mt-2">Crafting Nature&apos;s Beauty into Your Home</p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16 relative z-10">
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-amber-400 mb-6">Our Story</h2>
              <p className="text-lg text-amber-100 mb-4">
                Founded in 2010, Woodland Wonders began with a simple passion: to bring the warmth and beauty of nature into every home. Our journey started in a small workshop, where we handcrafted each piece with love and attention to detail.
              </p>
              <p className="text-lg text-amber-100">
                Today, we&apos;ve grown into a team of skilled artisans, but our core values remain unchanged. We continue to create furniture that not only enhances your living spaces but also tells a story of sustainability and craftsmanship.
              </p>
            </motion.div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: 'Customer First', description: 'Your satisfaction is our top priority' },
                { icon: Heart, title: 'Passion', description: 'We love what we do, and it shows in our work' },
                { icon: Leaf, title: 'Sustainability', description: 'Committed to eco-friendly practices' },
                { icon: Star, title: 'Quality', description: 'Excellence in every detail' },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <value.icon className="w-12 h-12 text-amber-400 mb-4" />
                  <h3 className="text-xl font-semibold text-amber-300 mb-2">{value.title}</h3>
                  <p className="text-amber-100">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <motion.div style={{ opacity, scale }}>
              <h2 className="text-3xl font-bold text-amber-400 mb-6">Our Craftsmanship</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Image
                    src="/About/craft.gif"
                    alt="Artisan crafting furniture"
                    className="rounded-lg shadow-xl mb-4"
                    width={600}
                    height={400}
                  />
                  <p className="text-lg text-amber-100">
                    Each piece is meticulously handcrafted by our skilled artisans, ensuring the highest quality and attention to detail.
                  </p>
                </div>
                <div>
                  <Image
                    src="/About/craft.jpeg"
                    alt="Finished wooden furniture piece"
                    className="rounded-lg shadow-xl mb-4"
                    width={600}
                    height={400}
                  />
                  <p className="text-lg text-amber-100">
                    We use only the finest sustainably sourced woods, combining traditional techniques with modern design to create timeless pieces.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Living Room', image: '/About/livingroom.jpeg' },
                { name: 'Dining Room', image: '/About/dining.webp' },
                { name: 'Bedroom', image: '/About/bed.webp' },
              ].map((room, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Image
                    src={room.image}
                    alt={`${room.name} furniture`}
                    className="w-full h-64 object-cover"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-amber-100">{room.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-amber-400 mb-6">Get in Touch</h2>
              <p className="text-lg text-amber-100 mb-4">
                We&apos;d love to hear from you! Whether you have a question about our products, need design advice, or want to discuss a custom piece, our team is here to help.
              </p>
              <button className="bg-amber-600 text-amber-50 py-2 px-4 rounded hover:bg-amber-700 transition duration-300">
                Contact Us
              </button>
            </motion.div>
          </section>
        </main>

        <Footer />

        <motion.div
          className="fixed bottom-4 right-4 bg-amber-600 text-amber-50 p-2 rounded-full cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronDown className="w-6 h-6 transform rotate-180" />
        </motion.div>
      </div>
    </>
  );
}
