'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <>
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

      <section className="relative w-full h-screen overflow-hidden bg-black">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/heroBg.jpg"
            alt="Luxury Jewellery Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>

        {/* Centered Text Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-6 md:px-16">
          <motion.div
            className="text-center max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-[#FDF6E3] leading-tight mb-6 drop-shadow-md">
              Jewellery That Defines <span className="text-[#D4AF37]">Elegance</span>
            </h1>
            <p className="text-[#B3B3B3] text-lg md:text-xl mb-8 drop-shadow-sm">
              Discover timeless luxury in every piece. Explore our handpicked collection of gold, diamond, and bridal jewellery.
            </p>

            {/* Shimmer Button */}
            <button
              className="text-black cursor-pointer font-medium px-6 py-3 rounded-full transition-all shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #d4af37, #fff8dc, #d4af37)',
                backgroundSize: '200% auto',
                animation: 'shimmer 2.5s linear infinite',
              }}
            >
              Explore Collections
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
