'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const collections = [
  {
    category: 'Gold Jewellery',
    description: 'Crafted with purity and passion, perfect for every celebration.',
    items: [
      { name: 'Royal Ring', image: '/assets/gold1.jpg' },
      { name: 'Bangles Set', image: '/assets/gold2.jpg' },
      { name: 'Gold Necklace', image: '/assets/gold3.jpg' },
    ],
  },
  {
    category: 'Diamond Jewellery',
    description: 'Dazzle your world with brilliance that never fades.',
    items: [
      { name: 'Heart Ring', image: '/assets/diamond1.jpg' },
      { name: 'Diamond Band', image: '/assets/diamond2.jpg' },
      { name: 'Necklace Set', image: '/assets/diamond3.jpg' },
    ],
  },
  {
    category: 'Silver Jewellery',
    description: 'Chic, minimal and made to shine in every moment.',
    items: [
      { name: 'Silver Ring', image: '/assets/silver1.jpg' },
      { name: 'Oxidised Set', image: '/assets/silver2.jpg' },
      { name: 'Silver Anklet', image: '/assets/silver3.jpg' },
    ],
  },
]

export default function CollectionPage() {
  return (
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-24">
        {collections.map((collection, idx) => (
          <motion.div
            key={idx}
            className="space-y-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-wider relative inline-block text-[#C8102E] mb-4">
                <span className="absolute opacity-10 -z-10 left-0 right-0 text-5xl font-bold text-black/10">
                  Discover Our
                </span>
                {collection.category}
              </h2>
              <p className="text-[#555] text-md md:text-lg">{collection.description}</p>
            </div>

            {/* Product Grid */}
            <div className="grid gap-8 md:grid-cols-3">
              {collection.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 text-center bg-white">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <div className="text-red-500 text-sm mb-1">★★★★★</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
