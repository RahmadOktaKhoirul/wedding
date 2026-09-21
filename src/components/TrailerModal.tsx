import React from "react";
import { X, Play, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trailerUrl: string;
  movieTitle: string;
}

export default function TrailerModal({
  isOpen,
  onClose,
  trailerUrl,
  movieTitle,
}: TrailerModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl aspect-video bg-[#0d0d0c] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10"
          >
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded tracking-widest">
                  Trailer
                </span>
                <span className="text-sm font-semibold truncate text-white/90">
                  {movieTitle}
                </span>
              </div>
              <button
                onClick={onClose}
                id="close-trailer-modal"
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center border border-white/10 transition-transform active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="w-full h-full pt-10">
              <iframe
                title={`${movieTitle} Official Trailer`}
                src={`${trailerUrl}?autoplay=1&mute=0&enablejsapi=1`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
