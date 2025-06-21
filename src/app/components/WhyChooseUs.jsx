'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCcw, Gem, Truck } from 'lucide-react';

export default function WhyChooseUs() {
  const promises = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#D4AF37]" />,
      title: 'BIS Hallmarked Gold',
      desc: 'Guaranteed purity, certified by the Bureau of Indian Standards.',
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-[#D4AF37]" />,
      title: 'Lifetime Exchange',
      desc: 'Exchange your jewelry anytime with complete trust and transparency.',
    },
    {
      icon: <Gem className="h-8 w-8 text-[#D4AF37]" />,
      title: 'Certified Diamonds',
      desc: 'Every diamond is lab-certified for authenticity and brilliance.',
    },
    {
      icon: <Truck className="h-8 w-8 text-[#D4AF37]" />,
      title: 'Free Shipping & Easy Returns',
      desc: 'Enjoy fast, insured delivery and hassle-free returns on every order.',
    },
  ];

  return (
    <section className="bg-black text-[#FDF6E3] py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-serif font-semibold mb-4 text-[#D4AF37]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Promise to You
        </motion.h2>
        <motion.p
          className="text-[#B3B3B3] text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafted with precision, delivered with pride — here’s what sets us apart.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {promises.map((item, index) => (
          <motion.div
            key={index}
            className="bg-black border border-[#333] rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#FDF6E3] mb-2">{item.title}</h3>
            <p className="text-[#B3B3B3] text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
