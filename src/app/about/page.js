'use client'
import { motion } from 'framer-motion'
import AboutSection from '../components/AboutSection'


export default function AboutPage() {
  return (
    <main className="bg-black mt-8 text-white">
      {/* ABOUT STORE Section */}
      
                <AboutSection/>
      {/* Our Vision */}
      <section className="py-20 px-6 md:px-16 border-t border-gray-800">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#FDF6E3] mb-6">Our <span className="text-[#D4AF37]">Vision</span></h2>
          <p className="text-[#B3B3B3] text-md md:text-lg leading-relaxed">
            To redefine elegance by becoming the most trusted name in handcrafted jewellery,
            where every creation tells a story of heritage, purity, and passion. We envision a
            future where every celebration shines a little brighter through our legacy pieces.
          </p>
        </motion.div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 md:px-16 border-t border-gray-800">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#FDF6E3] mb-6">Our <span className="text-[#D4AF37]">Mission</span></h2>
          <p className="text-[#B3B3B3] text-md md:text-lg leading-relaxed">
            At Parvatiya Ornaments, we are committed to delivering timeless jewellery that blends
            traditional craftsmanship with modern elegance. With unmatched purity, ethical practices,
            and personalized service, we strive to make luxury accessible to all.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-16 border-t border-gray-800">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#FDF6E3] mb-10">
            Why <span className="text-[#D4AF37]">Choose Us</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-left text-[#FDF6E3]">
            <div>
              <h4 className="font-semibold text-xl mb-2">✅ Legacy Since 1984</h4>
              <p className="text-[#B3B3B3]">Decades of trust and unmatched craftsmanship.</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-2">✅ Hallmarked Purity</h4>
              <p className="text-[#B3B3B3]">Every piece is BIS & 925 certified for purity.</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-2">✅ Personalized Service</h4>
              <p className="text-[#B3B3B3]">Tailored recommendations for your special occasions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-2">✅ Lowest Making Charges</h4>
              <p className="text-[#B3B3B3]">Transparent pricing with the best value in the region.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final Brand Note */}
      <section className="py-20 px-6 md:px-16 border-t border-gray-800">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#FDF6E3] mb-6">
            More Than Jewellery — It&#39;s a Legacyf
          </h2>
          <p className="text-[#B3B3B3] text-md md:text-lg leading-relaxed">
            At Parvatiya Ornaments, we do not just sell ornaments — we craft stories,
            memories, and legacies that last generations. Whether it’s a gift, an heirloom,
            or a bridal dream, we are honored to be part of your life’s precious moments.
          </p>
        </motion.div>
      </section>
    </main>
  )
}
