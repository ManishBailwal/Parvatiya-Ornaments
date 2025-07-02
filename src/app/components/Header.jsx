'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
          <Link href="/" className="text-[#C8102E] font-serif text-2xl font-semibold tracking-wide">
            Parvatiya Ornaments
          </Link>

          <nav className="hidden md:flex items-center space-x-10 text-[#1A1A1A] font-medium">
            <Link href="/home" className="hover:text-[#C8102E] transition-all duration-300">Home</Link>
            <Link href="/collections" className="hover:text-[#C8102E] transition-all duration-300">Collections</Link>
            <Link href="/about" className="hover:text-[#C8102E] transition-all duration-300">About</Link>
            <Link href="/contact" className="hover:text-[#C8102E] transition-all duration-300">Contact</Link>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#1A1A1A]">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            <motion.div
              className="fixed top-0 left-0 min-h-screen w-full z-[100] bg-white text-[#1A1A1A] px-6 pb-16 flex flex-col items-center justify-center space-y-12 relative"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <button onClick={toggleMenu} className="absolute top-6 right-6 text-[#1A1A1A] hover:text-[#C8102E] transition">
                <X size={28} />
              </button>

              <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">Parvatiya Ornaments</h2>
              <Link href="/home" onClick={toggleMenu} className="hover:text-[#C8102E] text-2xl transition-all">Home</Link>
              <Link href="/collections" onClick={toggleMenu} className="hover:text-[#C8102E] text-2xl transition-all">Collections</Link>
              <Link href="/about" onClick={toggleMenu} className="hover:text-[#C8102E] text-2xl transition-all">About</Link>
              <Link href="/contact" onClick={toggleMenu} className="hover:text-[#C8102E] text-2xl transition-all">Contact</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
