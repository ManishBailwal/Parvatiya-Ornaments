'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-black text-[#FDF6E3] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto min-h-screen md:flex md:items-center md:justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-start w-full">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6">
              Get in Touch
            </h2>
            <p className="text-[#B3B3B3] text-md md:text-lg mb-8 leading-relaxed">
              Whether you are looking for something custom, have questions, or simply want to say hello — we are here for you.
            </p>
            <ul className="space-y-6 text-sm md:text-base">
              <li className="flex items-start gap-4">
                <MapPin className="text-[#D4AF37] mt-1" />
                <span>Parvatiya Ornaments, Dharampur Araghar, Dehradun – 248001</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-[#D4AF37] mt-1" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-[#D4AF37] mt-1" />
                <span>info@parvatiyaornaments.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-[#111] p-8 rounded-2xl shadow-xl space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block mb-2 text-sm text-[#FDF6E3]">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-black border border-[#333] text-[#FDF6E3] placeholder-[#777] focus:outline-none focus:border-[#D4AF37]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-[#FDF6E3]">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-black border border-[#333] text-[#FDF6E3] placeholder-[#777] focus:outline-none focus:border-[#D4AF37]"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-[#FDF6E3]">Your Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-black border border-[#333] text-[#FDF6E3] placeholder-[#777] focus:outline-none focus:border-[#D4AF37]"
                placeholder="Type your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="text-black font-medium px-6 py-2 rounded-full shadow-md"
              style={{
                background: 'linear-gradient(90deg, #d4af37, #fff8dc, #d4af37)',
                backgroundSize: '200% auto',
                animation: 'shimmer 2.5s linear infinite',
              }}
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="max-w-7xl mx-auto mt-16 rounded-2xl overflow-hidden border border-[#333] shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.0205460183247!2d78.04561837540128!3d30.306180474792765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929a407091207%3A0x1c87daf4a459376e!2sParvatiya%20ornaments!5e1!3m2!1sen!2sin!4v1750573965071!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
  );
}
