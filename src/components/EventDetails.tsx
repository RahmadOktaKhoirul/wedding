import React from "react";
import { MapPin, Clock, Calendar } from "lucide-react";
import { WeddingData } from "../types";

interface EventDetailsProps {
  data: WeddingData;
}

export default function EventDetails({ data }: EventDetailsProps) {
  return (
    <section className="max-w-4xl mx-auto px-6 sm:px-8 py-16 flex flex-col items-center gap-10">

      {/* Section label */}
      <div className="flex items-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-700/50" />
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-pink-400/60">Detail Acara</p>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-700/50" />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Akad */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-pink-400">Akad Nikah</h3>
          </div>
          <div className="flex flex-col gap-3">
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
        </div>

        {/* Resepsi */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-pink-400">Resepsi</h3>
          </div>
          <div className="flex flex-col gap-3">
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
      </div>

      {/* Dress code */}
      <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-pink-400/60 mb-1">Dress Code</p>
          <p className="text-white font-semibold">{data.dressCode}</p>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-full border-2 border-white/10 shadow-lg" style={{ background: "#8faa8b" }} />
            <p className="text-[9px] text-gray-500 font-mono">Sage Green</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-full border-2 border-white/10 shadow-lg" style={{ background: "#c9a0a0" }} />
            <p className="text-[9px] text-gray-500 font-mono">Dusty Rose</p>
          </div>
        </div>
      </div>

      {/* Maps button */}
      <a
        href={data.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-8 py-3 rounded-sm bg-white text-black font-black text-sm tracking-wide hover:bg-pink-100 active:scale-95 transition-all shadow-xl"
      >
        <MapPin className="w-4 h-4" />
        Buka Google Maps
      </a>
    </section>
  );
}
