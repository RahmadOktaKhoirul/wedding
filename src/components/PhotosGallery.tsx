import React from "react";
import { Grid, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PhotosGalleryProps {
  photos: string[];
  movieTitle: string;
}

export default function PhotosGallery({ photos, movieTitle }: PhotosGalleryProps) {
  const [activePhoto, setActivePhoto] = React.useState<number | null>(null);

  const handlePrev = () => {
    if (activePhoto !== null)
      setActivePhoto((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNext = () => {
    if (activePhoto !== null)
      setActivePhoto((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhoto === null) return;
      if (e.key === "Escape") setActivePhoto(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto]);

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-20 mb-20">
      <div className="flex justify-center mb-10 text-center">
        <div className="glass-pill flex items-center gap-2 px-6 py-2 rounded-full text-xs uppercase tracking-widest font-mono text-pink-300 shadow-lg">
          <Grid className="w-4 h-4 text-pink-400" />
          photos
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 rounded-2xl overflow-hidden shadow-2xl border border-pink-900/20 bg-[#0d0810] p-1">
        {photos.map((itemUrl, index) => (
          <div
            key={index}
            onClick={() => setActivePhoto(index)}
            className="group relative aspect-square sm:aspect-video bg-[#1a0d18] cursor-pointer overflow-hidden"
          >
            <img
              alt={`${movieTitle} Photo Still ${index + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover md:grayscale md:brightness-90 md:group-hover:grayscale-0 md:group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
              src={itemUrl}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-pink-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-2.5 rounded-full bg-pink-900/40 backdrop-blur-md border border-pink-700/30 transform scale-90 group-hover:scale-100 transition duration-300">
                <Eye className="w-4 h-4 text-pink-200" />
              </span>
            </div>
            <span className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-white/40 group-hover:text-pink-300 select-none bg-black/50 px-2 py-0.5 rounded transition">
              MOMENT #{index + 1}
            </span>
          </div>
        ))}
      </div>


      <AnimatePresence>
        {activePhoto !== null && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhoto(null)}
              className="absolute inset-0 bg-[#0a050a]/97 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[85vh] z-10 flex flex-col justify-center"
            >
              <div className="absolute top-[-44px] left-0 right-0 p-2 flex items-center justify-between text-white text-sm">
                <span className="font-mono text-xs text-pink-300/70">
                  MOMENT {activePhoto + 1} / {photos.length} — {movieTitle}
                </span>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="w-8 h-8 rounded-full bg-pink-950/50 hover:bg-pink-900/60 flex items-center justify-center transition border border-pink-800/40 active:scale-95 text-pink-200"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-pink-900/20 shadow-2xl bg-[#0d0810] aspect-video flex items-center justify-center">
                <img
                  src={photos[activePhoto]}
                  referrerPolicy="no-referrer"
                  className="max-h-[80vh] max-w-full object-contain"
                  alt={`${movieTitle} zoomed still`}
                />
                <button
                  onClick={handlePrev}
                  className="absolute left-4 w-12 h-12 rounded-full bg-pink-950/50 hover:bg-pink-900/70 border border-pink-800/30 text-pink-200 flex items-center justify-center transition duration-200 hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 w-12 h-12 rounded-full bg-pink-950/50 hover:bg-pink-900/70 border border-pink-800/30 text-pink-200 flex items-center justify-center transition duration-200 hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
