import React from "react";
import { motion } from "motion/react";
import { MapPin, Calendar } from "lucide-react";
import { WeddingData } from "../types";

interface Props {
  data: WeddingData;
}

export default function InvitationSection({ data }: Props) {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-16 flex flex-col items-center gap-14 text-center">

      {/* ── 1. PEMBUKAAN ── */}
      <motion.div
        className="flex flex-col items-center gap-5 w-full"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3">
          <motion.div className="h-px w-10 bg-gradient-to-r from-transparent to-pink-700/50"
            initial={{ scaleX: 0, originX: 1 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }} />
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-pink-400/60">Undangan Pernikahan</p>
          <motion.div className="h-px w-10 bg-gradient-to-l from-transparent to-pink-700/50"
            initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }} />
        </div>
        <motion.p className="text-gray-400 text-base leading-relaxed"
          initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.p>
        <motion.p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
          Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyelenggarakan
          pernikahan putra-putri kami. Merupakan suatu kehormatan dan kebahagiaan bagi kami
          apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        </motion.p>
      </motion.div>

      {/* ── 2. NAMA PENGANTIN ── */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-center">
        <motion.div className="w-full h-full"
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="w-full h-full bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 flex flex-col items-center gap-3">
            <motion.div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-800/60 to-rose-900/60 border border-pink-700/30 flex items-center justify-center text-2xl"
              initial={{ scale: 0, rotate: -15 }} whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}>
              🤵
            </motion.div>
            <div>
              <p className="text-white font-serif font-extrabold text-lg sm:text-xl leading-tight">{data.groomName}</p>
              <p className="text-pink-400 text-xs font-mono mt-0.5">{data.groomTitle}</p>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Putra dari<br />
              <span className="text-gray-300 font-medium">{data.groomFather}</span>
              <br />&amp;<br />
              <span className="text-gray-300 font-medium">{data.groomMother}</span>
            </p>
          </div>
        </motion.div>

        <motion.div className="flex items-center justify-center py-2 sm:py-0"
          initial={{ opacity: 0, scale: 0.3 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.4 }}>
          <p className="text-pink-500 font-serif text-3xl font-light">&</p>
        </motion.div>

        <motion.div className="w-full h-full"
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="w-full h-full bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 flex flex-col items-center gap-3">
            <motion.div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-800/60 to-rose-900/60 border border-pink-700/30 flex items-center justify-center text-2xl"
              initial={{ scale: 0, rotate: 15 }} whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}>
              👰
            </motion.div>
            <div>
              <p className="text-white font-serif font-extrabold text-lg sm:text-xl leading-tight">{data.brideName}</p>
              <p className="text-pink-400 text-xs font-mono mt-0.5">{data.brideTitle}</p>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Putri dari<br />
              <span className="text-gray-300 font-medium">{data.brideFather}</span>
              <br />&amp;<br />
              <span className="text-gray-300 font-medium">{data.brideMother}</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── 3. WAKTU ACARA ── */}
      <motion.div
        className="w-full flex flex-col gap-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3 justify-center">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-pink-700/50" />
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-pink-400/60">Detail Acara</p>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-pink-700/50" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Akad */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-pink-400">Akad Nikah</h3>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-pink-500/60 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Jumat, 2 Oktober 2026</p>
                <p className="text-gray-500 text-xs font-mono mt-0.5">{data.akadTime}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-pink-500/60 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">{data.venue}</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{data.address}</p>
              </div>
            </div>
          </div>

          {/* Resepsi */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-pink-400">Resepsi</h3>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-pink-500/60 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Jumat, 2 Oktober 2026</p>
                <p className="text-gray-500 text-xs font-mono mt-0.5">{data.resepsiTime}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-pink-500/60 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">{data.venue}</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{data.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dress code */}
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-[10px] font-mono uppercase tracking-widest text-pink-400/60 mb-1">Dress Code</p>
            <p className="text-white font-semibold">{data.dressCode}</p>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-9 h-9 rounded-full border-2 border-white/10" style={{ background: "#8faa8b" }} />
              <p className="text-[9px] text-gray-500 font-mono">Sage Green</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-9 h-9 rounded-full border-2 border-white/10" style={{ background: "#c9a0a0" }} />
              <p className="text-[9px] text-gray-500 font-mono">Dusty Rose</p>
            </div>
          </div>
        </div>

        {/* Maps */}
        <div className="flex justify-center">
          <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-white text-black font-black text-sm tracking-wide hover:bg-pink-100 active:scale-95 transition-all shadow-xl rounded-sm">
            <MapPin className="w-4 h-4" />
            Buka Google Maps
          </a>
        </div>
      </motion.div>

      {/* ── 4. PENUTUP ── */}
      <motion.p
        className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-md"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Kehadiran serta doa restu Bapak/Ibu/Saudara/i merupakan kehormatan dan
        kebahagiaan yang tak ternilai bagi kami dan seluruh keluarga.
      </motion.p>

    </section>
  );
}
