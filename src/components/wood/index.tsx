'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TreePine, Leaf, Recycle } from 'lucide-react'
import Image from 'next/image'

export default function AnimatedFurnitureInfo() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const imageX = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], ['50px', '0px', '-50px'])

  const woodPoints = [
    { icon: TreePine, text: 'Sustainably sourced wood' },
    { icon: Leaf, text: 'Eco-friendly finishes' },
    { icon: Recycle, text: 'Recyclable materials' },
  ]

  return (
    <div ref={containerRef} className="container">
      <div className="content">
        <motion.div
          className="flex-container"
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="text-content">
            <h2 className="title">Crafted with Care</h2>
            <p className="description">
              Our furniture is meticulously crafted using the finest wood, ensuring both beauty and durability. 
              Each piece tells a story of craftsmanship and sustainable practices.
            </p>
          </div>
          <motion.div className="image-container" style={{ x: imageX }}>
            <Image
              src="/wood.jpg"
              alt="Handcrafted wooden furniture"
              className="image"
              width={600}
              height={400}
            />
          </motion.div>
        </motion.div>

        <div className="quality-section">
          <h3 className="section-title">Our Commitment to Quality</h3>
          <div className="points-grid">
            {woodPoints.map((point, index) => (
              <motion.div
                key={index}
                className="point"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <point.icon className="icon text-amber-800" />
                <p className="point-text">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background-color: #fffbeb;
          overflow: hidden;
        }

        .content {
          max-width: 1152px;
          margin: 0 auto;
          padding: 4rem 1rem;
        }

        .flex-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .text-content {
          margin-bottom: 2rem;
        }

        .title {
          font-size: 2.25rem;
          font-weight: bold;
          color: #78350f;
          margin-bottom: 1rem;
        }

        .description {
          font-size: 1.125rem;
          color: #92400e;
        }

        .image {
          border-radius: 0.5rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .quality-section {
          margin-top: 4rem;
        }

        .section-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: #78350f;
          margin-bottom: 2rem;
        }

        .points-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 2rem;
        }

        .point {
          background-color: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .icon {
          width: 3rem;
          height: 3rem;
          color: #92400e;
          margin-bottom: 1rem;
        }

        .point-text {
          font-size: 1.125rem;
          font-weight: 600;
          color: #92400e;
        }

        @media (min-width: 768px) {
          .flex-container {
            flex-direction: row;
          }

          .text-content {
            width: 50%;
            margin-bottom: 0;
          }

          .image-container {
            width: 50%;
          }

          .points-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  )
}