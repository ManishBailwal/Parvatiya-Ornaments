'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/aboutImage.jpg"
            alt="Parvatiya Ornaments Store"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#C8102E] mb-4">
            Parvatiya Ornaments, Dharampur Araghar
          </h2>
          <p className="text-[#555] text-md md:text-lg mb-6 leading-relaxed">
            Since <span className="text-[#D4AF37] font-semibold">1984</span>, we have been the trusted destination in Dehradun for handcrafted jewellery that celebrates tradition and elegance. From <span className="text-[#C8102E]">Fine Gold</span> to <span className="text-[#C8102E]">925 Hallmark Silver</span>, each piece is a reflection of artistry and authenticity.
          </p>
          <ul className="text-sm text-[#1A1A1A] space-y-2 mb-6">
            <li>⭐ Fine Gold Jewellery</li>
            <li>⭐ 925 Hallmark Silver Jewellery</li>
            <li>⭐ Elevating everyday with exquisite, handcrafted pieces</li>
            <li>⭐ Lowest Making Charges in the region</li>
          </ul>
          <button
            className="text-black font-medium px-6 py-2 rounded-full shadow-md"
            style={{
              background: 'linear-gradient(90deg, #c8102e, #ffd5d5, #c8102e)',
              backgroundSize: '200% auto',
              animation: 'shimmer 2.5s linear infinite',
            }}
          >
            Know Our Story
          </button>
        </motion.div>
      </div>

      {/* Shimmer Keyframes */}
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
