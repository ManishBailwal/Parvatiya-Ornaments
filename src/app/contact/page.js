'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto min-h-screen md:flex md:items-center md:justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-start w-full">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#C8102E] mb-6">
              Get in Touch
            </h2>
            <p className="text-[#555] text-md md:text-lg mb-8 leading-relaxed">
              Whether you're looking for something custom, have questions, or simply want to say hello — we are here for you.
            </p>
            <ul className="space-y-6 text-sm md:text-base text-[#333]">
              <li className="flex items-start gap-4">
                <MapPin className="text-[#C8102E] mt-1" />
                <span>Parvatiya Ornaments, Dharampur Araghar, Dehradun – 248001</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-[#C8102E] mt-1" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-[#C8102E] mt-1" />
                <span>info@parvatiyaornaments.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-[#F9F9F9] p-8 rounded-2xl shadow-xl space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block mb-2 text-sm text-[#1A1A1A]">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#CCC] text-[#1A1A1A] placeholder-[#888] focus:outline-none focus:border-[#C8102E]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-[#1A1A1A]">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#CCC] text-[#1A1A1A] placeholder-[#888] focus:outline-none focus:border-[#C8102E]"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-[#1A1A1A]">Your Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#CCC] text-[#1A1A1A] placeholder-[#888] focus:outline-none focus:border-[#C8102E]"
                placeholder="Type your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="text-white font-medium px-6 py-2 rounded-full shadow-md"
              style={{
                background: 'linear-gradient(90deg, #C8102E, #FFD5D5, #C8102E)',
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
      <div className="max-w-7xl mx-auto mt-16 rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-md">
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
