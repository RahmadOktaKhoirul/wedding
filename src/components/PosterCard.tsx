import React from "react";
import { Info, Heart, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import RatingControl from "./RatingControl";

interface PosterCardProps {
  posterUrl: string;
  movieTitle: string;
  description: string;
}

export default function PosterCard({ posterUrl, movieTitle, description }: PosterCardProps) {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [showTrivia, setShowTrivia] = React.useState(false);

  return (
    <div className="lg:col-span-3 flex flex-col gap-3">
      {/* Info pill */}
      <div
        onClick={() => setShowTrivia(!showTrivia)}
        id="poster-info-pill"
        className="glass-pill flex items-center gap-2 w-max px-3 py-1 rounded-full text-xs font-mono font-bold cursor-pointer text-pink-300 hover:text-pink-200 hover:border-pink-500/40 select-none transition"
      >
        <Info className="w-3.5 h-3.5 text-pink-400" />
        info
      </div>

      {/* Poster */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-pink-900/20 aspect-[3/4] group">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url('/comic.webp')`, backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a0f]/60 via-transparent to-transparent" />

        {/* Rating — pojok kanan atas, compact */}
        <div className="absolute top-3 right-3 z-10">
          <RatingControl />
        </div>

        {/* Trivia overlay */}
        <AnimatePresence>
          {showTrivia && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="absolute inset-0 bg-[#0f0a0f]/97 p-6 flex flex-col justify-between overflow-y-auto z-20"
            >
              <div>
                <h4 className="text-sm font-bold text-pink-400 font-mono mb-2 uppercase tracking-wide">
                  Sinopsis Singkat
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">{description}</p>
              </div>
              <button
                onClick={() => setShowTrivia(false)}
                className="mt-4 w-full bg-pink-900/30 hover:bg-pink-900/50 text-pink-200 text-[10px] py-1.5 rounded-lg font-mono tracking-widest uppercase border border-pink-800/40"
              >
                Tutup Info
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Favorit — di bawah poster */}
      <div className="flex gap-2 w-full">
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          id="btn-add-to-favourites"
          className={`flex-1 border text-[10px] py-2.5 rounded-full font-bold uppercase tracking-tight flex items-center justify-center gap-1.5 active:scale-95 transition-all duration-300 ${
            isFavorite
              ? "bg-pink-600 border-pink-500 text-white shadow-lg shadow-pink-600/20"
              : "bg-pink-950/40 border-pink-800/40 text-white hover:bg-pink-900/50"
          }`}
        >
          {isFavorite ? <Check className="w-3 h-3" /> : <span className="text-xs">+</span>}
          {isFavorite ? "In favorites" : "Add to favorites"}
        </button>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          id="favourite-heart-icon-btn"
          className={`w-10 h-10 border rounded-full flex items-center justify-center text-white transition active:scale-90 ${
            isFavorite
              ? "bg-pink-600 border-pink-500"
              : "bg-pink-950/40 border-pink-800/40 hover:bg-pink-900/50 hover:text-pink-300"
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>
      </div>
    </div>
  );
}
