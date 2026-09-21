import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { WeddingConfig } from "../types";

interface ClosingSectionProps {
  config: WeddingConfig;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ config }) => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-8 bg-transparent text-center overflow-hidden">
      {/* Background Ornaments: Layer Paling Depan (z-20), Left Flipped, Right Natural */}
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Left Flipped"
        className="absolute z-20 -bottom-8 -left-10 sm:-left-12 w-44 sm:w-56 opacity-90 pointer-events-none animate-float-left drop-shadow-md"
      />
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Right"
        className="absolute z-20 -bottom-8 -right-10 sm:-right-12 w-44 sm:w-56 opacity-90 pointer-events-none animate-float-right drop-shadow-md"
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-md mx-auto p-6 sm:p-8 rounded-3xl frosted-card flex flex-col items-center"
      >
        {/* Closing Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-2 bg-gradient-to-b from-[#FAF7F2] to-[#EDE4D7] border-2 border-[#C5A880]/60 shadow-xl mb-8"
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={config.closing.photo || "/assets/intro.webp"}
              alt="Closing Mempelai"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Closing Words */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-xs sm:text-sm text-[#6B5048] leading-relaxed mb-6 whitespace-pre-line"
        >
          {config.closing.quote}
        </motion.p>

        <p className="font-cinzel text-xs tracking-widest uppercase text-[#853638] font-bold mb-2">
          Kami yang berbahagia,
        </p>

        {/* Couple Signature Name */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant italic text-3xl sm:text-4xl font-bold text-[#853638] mb-10"
        >
          {config.bride.nickname} &amp; {config.groom.nickname}
        </motion.h2>

        {/* Watermark / Credits */}
        <div className="pt-6 border-t border-[#C5A880]/30 w-full flex flex-col items-center gap-1">
          <p className="text-[11px] font-sans text-[#8C7A70] flex items-center justify-center gap-1 font-medium">
            Made with <Heart className="w-3 h-3 text-[#853638] fill-[#853638]" /> by {config.groom.nickname} &amp; {config.bride.nickname}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
