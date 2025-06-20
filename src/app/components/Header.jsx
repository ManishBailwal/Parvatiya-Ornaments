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
      {/* Header Navbar */}
      <header className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-[#D4AF37] font-serif text-2xl font-semibold tracking-wide">
           Parvatiya Ornaments
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-[#FDF6E3] font-medium">
            <Link href="#collections" className="hover:text-[#D4AF37] transition-all duration-300">
              Collections
            </Link>
            <Link href="#about" className="hover:text-[#D4AF37] transition-all duration-300">
              About
            </Link>
            <Link href="#contact" className="hover:text-[#D4AF37] transition-all duration-300">
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#FDF6E3]">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay + Full-Width Slide Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Fullscreen Drawer */}
            <motion.div
              className="fixed top-0 left-0 min-h-screen w-full z-[100] bg-gradient-to-br from-black via-[#1c1c1c] to-[#111] text-[#FDF6E3] px-6 pb-16 flex flex-col items-center justify-center space-y-12 relative"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-[#FDF6E3] hover:text-[#D4AF37] transition"
              >
                <X size={28} />
              </button>

              {/* Navigation Links */}
              <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">LuxeGold</h2>
              <Link href="#collections" onClick={toggleMenu} className="hover:text-[#D4AF37] text-2xl transition-all">
                Collections
              </Link>
              <Link href="#about" onClick={toggleMenu} className="hover:text-[#D4AF37] text-2xl transition-all">
                About
              </Link>
              <Link href="#contact" onClick={toggleMenu} className="hover:text-[#D4AF37] text-2xl transition-all">
                Contact
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
