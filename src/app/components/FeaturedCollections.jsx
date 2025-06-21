'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FeaturedCollections() {
  const collections = [
    {
      title: 'Gold Necklaces',
      tagline: 'Timeless elegance in every strand.',
      image: '/assets/gold.jpg',
    },
    {
      title: '925 Silver Rings',
      tagline: 'Bold, refined and hallmarked to shine.',
      image: '/assets/silver.jpg',
    },
    {
      title: 'Diamond Sets',
      tagline: 'Celebrate your day with grace & glamour.',
      image: '/assets/diamond.jpg',
    },
  ]

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-serif text-[#FDF6E3] mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our <span className="text-[#D4AF37]">Signature Collections</span>
        </motion.h2>
        <p className="text-[#B3B3B3] text-md md:text-lg mb-12">
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
              <div className="absolute inset-0 bg-black/60 opacity-100 transition duration-300 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold text-[#FDF6E3] mb-2">{item.title}</h3>
                <p className="text-sm text-[#B3B3B3] mb-4 px-4">{item.tagline}</p>
                <button
                  className="text-black cursor-pointer font-medium px-5 py-2 rounded-full shadow-md"
                  style={{
                    background: 'linear-gradient(90deg, #d4af37, #fff8dc, #d4af37)',
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

      {/* Inline shimmer keyframes for button */}
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
