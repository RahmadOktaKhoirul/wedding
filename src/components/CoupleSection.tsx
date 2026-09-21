import React from "react";
import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { WeddingConfig } from "../types";

interface CoupleSectionProps {
  config: WeddingConfig;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ config }) => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-8 bg-transparent text-center overflow-hidden">
      {/* Background Ornament Accents: Layer Paling Depan (z-20), Left Flipped, Right Natural */}
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Left Flipped"
        className="absolute z-20 top-2 -left-12 sm:-left-16 w-48 sm:w-64 opacity-90 pointer-events-none animate-float-left drop-shadow-md"
      />
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Right"
        className="absolute z-20 bottom-2 -right-12 sm:-right-16 w-48 sm:w-64 opacity-90 pointer-events-none animate-float-right drop-shadow-md"
      />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#853638] font-bold mb-3"
        >
          Bride &amp; Groom
        </motion.p>

        {/* Greeting Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 p-5 rounded-3xl frosted-card-soft w-full"
        >
          <p className="font-cormorant italic text-lg sm:text-xl text-[#381618] font-bold mb-2">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#6B5048] leading-relaxed max-w-md mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
          </p>
        </motion.div>

        {/* Bride Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-10 w-full p-6 sm:p-8 rounded-3xl frosted-card"
        >
          {/* Photo Frame Arch */}
          <div className="relative w-44 h-60 sm:w-52 sm:h-68 rounded-t-full rounded-b-2xl overflow-hidden p-2 bg-gradient-to-b from-[#FAF7F2] to-[#EDE4D7] border-2 border-[#C5A880]/60 shadow-xl mb-5">
            <div className="w-full h-full rounded-t-full rounded-b-xl overflow-hidden bg-white/50">
              <img
                src={config.bride.photo || "/assets/woman.png"}
                alt={config.bride.fullName}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <h2 className="font-cormorant italic text-3xl sm:text-4xl font-bold text-[#853638] mb-1">
            {config.bride.nickname}
          </h2>

          <p className="font-cinzel text-sm sm:text-base font-bold text-[#381618] tracking-wide mb-2">
            {config.bride.fullName}
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#7D6B63] max-w-xs leading-relaxed mb-4">
            {config.bride.parents}
          </p>

          {config.bride.instagram && (
            <a
              href={config.bride.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#853638] text-white hover:bg-[#682426] transition-transform hover:scale-110 shadow-md"
              title="Instagram Mempelai Wanita"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </motion.div>

        {/* Ampersand Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="my-3 flex items-center justify-center gap-4 w-full"
        >
          <div className="h-[1px] bg-[#C5A880]/60 flex-1 max-w-[100px]" />
          <span className="font-script text-5xl sm:text-6xl text-[#853638] leading-none">
            &amp;
          </span>
          <div className="h-[1px] bg-[#C5A880]/60 flex-1 max-w-[100px]" />
        </motion.div>

        {/* Groom Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mt-3 w-full p-6 sm:p-8 rounded-3xl frosted-card"
        >
          {/* Photo Frame Arch */}
          <div className="relative w-44 h-60 sm:w-52 sm:h-68 rounded-t-full rounded-b-2xl overflow-hidden p-2 bg-gradient-to-b from-[#FAF7F2] to-[#EDE4D7] border-2 border-[#C5A880]/60 shadow-xl mb-5">
            <div className="w-full h-full rounded-t-full rounded-b-xl overflow-hidden bg-white/50">
              <img
                src={config.groom.photo || "/assets/men.png"}
                alt={config.groom.fullName}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <h2 className="font-cormorant italic text-3xl sm:text-4xl font-bold text-[#853638] mb-1">
            {config.groom.nickname}
          </h2>

          <p className="font-cinzel text-sm sm:text-base font-bold text-[#381618] tracking-wide mb-2">
            {config.groom.fullName}
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#7D6B63] max-w-xs leading-relaxed mb-4">
            {config.groom.parents}
          </p>

          {config.groom.instagram && (
            <a
              href={config.groom.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#853638] text-white hover:bg-[#682426] transition-transform hover:scale-110 shadow-md"
              title="Instagram Mempelai Pria"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};
