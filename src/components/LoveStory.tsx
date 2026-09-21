import { motion } from "motion/react";
import { WeddingData } from "../types";

interface Props {
  data: WeddingData;
}

export default function LoveStory({ data }: Props) {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-16 flex flex-col items-center gap-10">

      {/* Header — fade down */}
      <motion.div
        className="flex flex-col items-center gap-3 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="h-px w-10 bg-gradient-to-r from-transparent to-pink-700/50"
            initial={{ scaleX: 0, originX: 1 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-pink-400/60">Our Story</p>
          <motion.div
            className="h-px w-10 bg-gradient-to-l from-transparent to-pink-700/50"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        <h2 className="text-white font-serif font-extrabold text-2xl sm:text-3xl">Kisah Cinta Kami</h2>
        <p className="text-gray-500 text-xs sm:text-sm max-w-sm leading-relaxed">
          Setiap perjalanan cinta punya ceritanya sendiri. Inilah perjalanan kami.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative w-full">
        {/* Vertical line — grows downward */}
        <motion.div
          className="absolute left-[18px] sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-800/50 to-transparent"
          initial={{ scaleY: 0, originY: "top" }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="flex flex-col gap-10">
          {data.loveStory.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative flex items-start sm:items-center">

                {/* Desktop left card — slide dari kiri */}
                <div className="hidden sm:flex flex-1 justify-end pr-8">
                  {isLeft && (
                    <motion.div
                      className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 max-w-[220px] text-right"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.55, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="text-[10px] font-mono text-pink-400/70 uppercase tracking-widest">{item.year}</span>
                      <h3 className="text-white font-semibold text-sm mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                  )}
                </div>

                {/* Dot — pop spring */}
                <div className="absolute left-[12px] sm:static sm:shrink-0 flex items-center justify-center sm:z-10">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-pink-500 border-2 border-[#0f0a0f] shadow-lg shadow-pink-500/30"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 * i + 0.15 }}
                  />
                </div>

                {/* Desktop right card — slide dari kanan */}
                <div className="hidden sm:flex flex-1 justify-start pl-8">
                  {!isLeft && (
                    <motion.div
                      className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 max-w-[220px] text-left"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.55, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="text-[10px] font-mono text-pink-400/70 uppercase tracking-widest">{item.year}</span>
                      <h3 className="text-white font-semibold text-sm mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                  )}
                </div>

                {/* Mobile card — fade up */}
                <motion.div
                  className="sm:hidden pl-10 flex-1"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-4 text-left">
                    <span className="text-[10px] font-mono text-pink-400/70 uppercase tracking-widest">{item.year}</span>
                    <h3 className="text-white font-semibold text-sm mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Closing — ♡ bounce lalu teks fade up */}
      <div className="flex flex-col items-center gap-2 text-center">
        <motion.span
          className="text-pink-500 text-2xl"
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >♡</motion.span>
        <motion.p
          className="text-gray-500 text-xs leading-relaxed max-w-xs"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Dan kini, babak terbaik dari cerita kita baru saja akan dimulai.
        </motion.p>
      </div>

    </section>
  );
}
