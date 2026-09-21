import React from "react";
import { motion } from "motion/react";
import { WeddingConfig } from "../types";

interface QuoteSectionProps {
  config: WeddingConfig;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ config }) => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-8 bg-transparent text-center overflow-hidden">
      {/* Side Decorative Flowers: Layer Paling Depan (z-20), Left Flipped, Right Natural, Animated */}
      <img
        src="/assets/flower.webp"
        alt="Flower Decor Left Flipped"
        className="absolute z-20 -left-10 sm:-left-12 top-1/2 -translate-y-1/2 w-40 sm:w-56 opacity-90 pointer-events-none animate-float-left drop-shadow-md"
      />
      <img
        src="/assets/flower.webp"
        alt="Flower Decor Right"
        className="absolute z-20 -right-10 sm:-right-12 top-1/2 -translate-y-1/2 w-40 sm:w-56 opacity-90 pointer-events-none animate-float-right drop-shadow-md"
      />

      {/* Frosted Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-lg mx-auto p-6 sm:p-8 rounded-3xl frosted-card flex flex-col items-center"
      >
        {/* Main Photo in Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-2xl p-2 bg-gradient-to-b from-[#FAF7F2] to-[#EDE4D7] border border-[#C5A880]/50"
        >
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden relative">
            <img
              src={config.closing.photo || "/assets/intro.webp"}
              alt="Mempelai"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1113]/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Title: WITH LOVE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-cinzel text-xs sm:text-sm tracking-[0.35em] text-[#853638] uppercase font-bold mb-4"
        >
          WITH LOVE
        </motion.p>

        {/* Quote Verse */}
        <motion.blockquote
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant italic text-base sm:text-lg text-[#5A383A] leading-relaxed mb-4 px-2"
        >
          {config.quote.verse}
        </motion.blockquote>

        {/* Reference */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-cinzel font-semibold text-xs sm:text-sm tracking-wider text-[#853638]"
        >
          {config.quote.reference}
        </motion.p>
      </motion.div>
    </section>
  );
};
