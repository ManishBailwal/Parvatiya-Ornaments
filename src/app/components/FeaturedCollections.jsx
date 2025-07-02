'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FeaturedCollections() {
  const collections = [
    {
      title: 'Gold Jewellery',
      tagline: 'Timeless elegance in every strand.',
      image: '/assets/gold.jpg',
    },
    {
      title: 'Silver Jewellery',
      tagline: 'Bold, refined and hallmarked to shine.',
      image: '/assets/silver.jpg',
    },
    {
      title: 'Diamond Jewellery',
      tagline: 'Celebrate your day with grace & glamour.',
      image: '/assets/diamond.jpg',
    },
  ]

  return (
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-serif text-[#C8102E] mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our <span className="text-[#D4AF37]">Signature Collections</span>
        </motion.h2>
        <p className="text-[#555] text-md md:text-lg mb-12">
          Handpicked designs crafted with passion and purity.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {collections.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-72 object-cover group-hover:scale-150 transition duration-500"
              />
              {/* Minimal dark gradient overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent flex flex-col justify-end items-center text-center px-6 py-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white mb-3">{item.tagline}</p>
                <button
                  className="text-white font-medium px-5 py-2 rounded-full shadow-md"
                  style={{
                    background: 'linear-gradient(90deg, #c8102e, #ffd5d5, #c8102e)',
                    backgroundSize: '200% auto',
                    animation: 'shimmer 2.5s linear infinite',
                  }}
                >
                  View Collection
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inline shimmer keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  )
}
