'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryItems = [
  { src: '/assets/gallery1.jpg', alt: 'Gold Ring' },
  { src: '/assets/gallery2.jpg', alt: 'Silver Necklace' },
  { src: '/assets/gallery6.jpg', alt: 'Diamond Earrings' },
  { src: '/assets/gallery4.jpg', alt: 'Bridal Set' },
  { src: '/assets/gallery5.jpg', alt: 'Gold Bangles' },
  { src: '/assets/gallery3.jpg', alt: 'Custom Pendant' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white text-[#1A1A1A] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-serif text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#C8102E]">Gallery</span>
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-square relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-150 rounded-xl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4 rounded-xl">
                  <span className="bg-[#D4AF37] text-black text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    {item.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
