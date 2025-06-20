'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-[#FDF6E3] pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">LuxeGold</h2>
          <p className="text-sm text-[#B3B3B3] leading-relaxed">
            LuxeGold offers timeless pieces of luxury jewellery, expertly crafted to elevate every moment.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#collections" className="hover:text-[#D4AF37] transition-all">Collections</Link></li>
            <li><Link href="#about" className="hover:text-[#D4AF37] transition-all">About</Link></li>
            <li><Link href="#contact" className="hover:text-[#D4AF37] transition-all">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">Contact</h3>
          <p className="text-sm text-[#B3B3B3]">Email: support@luxegold.com</p>
          <p className="text-sm text-[#B3B3B3]">Phone: +91 98765 43210</p>
          <p className="text-sm text-[#B3B3B3]">Location: Dehradun, India</p>
        </div>
      </div>

      <div className="border-t border-[#333] mt-12 pt-6 text-center text-sm text-[#777] space-y-2">
        <p>© {new Date().getFullYear()} LuxeGold. All rights reserved.</p>
        <p>
          Developed by{' '}
          <a
            href="https://www.arterns.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline"
          >
            Arterns Technologies Pvt Ltd
          </a>
        </p>
      </div>
    </footer>
  )
}
