'use client'
import Link from 'next/link'
import { Facebook, Instagram, PhoneCall, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-[#FDF6E3] pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">Parvatiya Ornaments</h2>
          <p className="text-sm text-[#B3B3B3] leading-relaxed">
            Parvatiya Ornaments, established in 1984 at Dharampur Araghar, Dehradun, offers fine gold and 925 hallmark silver jewellery with unmatched craftsmanship and trust.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://instagram.com/parvatiyaornaments" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-[#D4AF37] hover:scale-110 transition" />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <PhoneCall className="w-5 h-5 text-[#D4AF37] hover:scale-110 transition" />
            </a>
            <a href="https://facebook.com/parvatiyaornaments" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-[#D4AF37] hover:scale-110 transition" />
            </a>
            <a href="https://youtube.com/@parvatiyaornaments" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="w-5 h-5 text-[#D4AF37] hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/home" className="hover:text-[#D4AF37] transition-all">Home</Link></li>
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

      {/* Bottom Strip */}
      <div className="border-t border-[#333] mt-12 pt-6 text-center text-sm text-[#777] space-y-2">
        <p>© {new Date().getFullYear()} Parvatiya Ornaments. All rights reserved.</p>
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
