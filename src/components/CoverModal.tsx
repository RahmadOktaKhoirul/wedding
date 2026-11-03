import React from "react";
import { motion } from "motion/react";
import { MailOpen } from "lucide-react";
import { WeddingConfig } from "../types";

interface CoverModalProps {
  config: WeddingConfig;
  guestName: string;
  isOpen: boolean;
  onOpen: () => void;
}

export const CoverModal: React.FC<CoverModalProps> = ({
  config,
  guestName,
  isOpen,
  onOpen,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
      className="cover-page fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image: Mobile Fitted + Desktop */}
      <picture className="absolute inset-0 z-0 block w-full h-full pointer-events-none">
        <source media="(max-width: 640px)" srcSet="/assets/background-mobile.webp" />
        <img
          src="/assets/background.webp"
          alt="Cover Background"
          className="w-full h-full object-cover object-center"
        />
      </picture>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="cover-content frosted-card relative z-10 max-w-sm sm:max-w-md w-full mx-4 px-8 py-10 sm:px-10 text-center"
      >
        {/* Monogram / Inisial with Gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-28 flex items-center justify-center select-none mb-3"
        >
          <span className="font-script text-8xl sm:text-9xl gradient-monogram leading-none -mr-4 drop-shadow-sm">
            {config.monogram.brideInitial}
          </span>
          <span className="font-script text-8xl sm:text-9xl text-[#C5A880] leading-none -ml-4 -mt-4 drop-shadow-sm">
            {config.monogram.groomInitial}
          </span>
        </motion.div>

        {/* The Wedding Of */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#853638] font-bold mb-1"
        >
          The Wedding Of
        </motion.p>

        {/* Bride & Groom Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-cormorant italic text-3xl sm:text-4xl text-[#381618] font-bold mb-6"
        >
          {config.bride.nickname} &amp; {config.groom.nickname}
        </motion.h1>

        <div className="w-16 h-[1px] bg-[#C5A880] mx-auto mb-6 opacity-70" />

        {/* Dear Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mb-8"
        >
          <p className="font-cinzel text-xs tracking-widest text-[#7D6B63] mb-2 uppercase font-semibold">
            Kepada Yth. Bapak/Ibu/Saudara/i :
          </p>
          <div className="inline-block px-5 py-2 rounded-full bg-[#EDE4D7]/80 border border-[#C5A880]/40 shadow-inner">
            <p className="font-cormorant text-xl sm:text-2xl font-bold text-[#853638] tracking-wide">
              {guestName || "Tamu Undangan"}
            </p>
          </div>
        </motion.div>

        {/* Open Button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={onOpen}
          className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#853638] hover:bg-[#682426] text-white font-cinzel text-xs tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
        >
          <MailOpen className="w-4 h-4 transition-transform group-hover:rotate-12" />
          <span>Buka Undangan</span>
        </motion.button>

        <p className="text-[11px] text-[#8C7A70] mt-4 italic font-sans">
          *Sentuh untuk membuka undangan &amp; memutar musik
        </p>
      </motion.div>
    </motion.div>
  );
};
