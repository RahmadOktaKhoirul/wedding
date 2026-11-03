import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gift, Copy, Check, ChevronDown, ChevronUp, CreditCard } from "lucide-react";
import { WeddingConfig } from "../types";

interface WeddingGiftSectionProps {
  gift: WeddingConfig["gift"];
}

export const WeddingGiftSection: React.FC<WeddingGiftSectionProps> = ({
  gift,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="invitation-panel invitation-panel--gift relative w-full py-16 px-4 sm:px-8 text-center overflow-hidden">
      {/* Front Layer Flower Ornaments (z-20) */}
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Left Flipped"
        className="absolute z-0 top-1/2 -translate-y-1/2 -left-10 sm:-left-12 w-40 sm:w-52 opacity-90 pointer-events-none animate-float-left drop-shadow-md"
      />
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Right"
        className="absolute z-0 top-1/2 -translate-y-1/2 -right-10 sm:-right-12 w-40 sm:w-52 opacity-90 pointer-events-none animate-float-right drop-shadow-md"
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-lg mx-auto p-6 sm:p-8 rounded-3xl frosted-card flex flex-col items-center"
      >
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#853638] font-bold mb-3"
        >
          Wedding Gift
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-xs sm:text-sm text-[#6B5048] leading-relaxed max-w-md mb-8"
        >
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami, dan jika
          memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara
          cashless.
        </motion.p>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#853638] hover:bg-[#682426] text-white font-cinzel text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Gift className="w-4 h-4" />
          <span>Klik Disini</span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 ml-1" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1" />
          )}
        </button>

        {/* Expandable Gift Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col gap-6 mt-8 overflow-hidden"
            >
              {/* Bank Cards */}
              {gift.bankAccounts.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#381618] to-[#1A0A0B] text-white border border-[#C5A880]/50 shadow-2xl flex flex-col text-left overflow-hidden"
                >
                  {/* Background Ornament & ATM Chip */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-7 h-7 text-[#C5A880]" />
                      <span className="font-cinzel text-base font-bold text-[#E5D9C8] tracking-widest uppercase">
                        {item.bank}
                      </span>
                    </div>

                    {/* Gold Chip Graphic */}
                    <div className="w-10 h-7 rounded-md bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] border border-[#B8860B] shadow-inner flex items-center justify-center">
                      <div className="w-full h-[1px] bg-[#9E7D4E]/50" />
                    </div>
                  </div>

                  {/* Account Number */}
                  <p className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-[#FAF7F2] mb-2 select-all">
                    {item.account}
                  </p>

                  {/* Account Holder & Copy Button */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                    <div>
                      <p className="text-[10px] font-sans text-white/60 uppercase tracking-wider">
                        Atas Nama
                      </p>
                      <p className="font-cinzel text-xs sm:text-sm font-semibold text-[#E5D9C8]">
                        {item.holder}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(item.account, index)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C5A880] hover:bg-[#B5966B] text-[#2B1113] font-cinzel text-[11px] font-bold tracking-wider uppercase transition-transform active:scale-95 cursor-pointer shadow-md"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin Rekening</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}

              {/* Physical Gift Info */}
              {gift.physicalGift && (
                <div className="relative w-full p-6 sm:p-7 rounded-3xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#C5A880]/40 shadow-lg text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#EDE4D7] flex items-center justify-center text-[#853638] mb-3 shadow-inner">
                    <Gift className="w-5 h-5" />
                  </div>
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#853638] uppercase mb-3">
                    Kirim Kado Fisik
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#4A2022] font-semibold mb-1">
                    Nama Penerima : {gift.physicalGift.recipientName}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#6B5048] mb-1">
                    No. HP/WA : {gift.physicalGift.phone}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#6B5048] max-w-sm leading-relaxed">
                    Alamat : {gift.physicalGift.address}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
