import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface GallerySectionProps {
  photos: string[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ photos }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 bg-transparent text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-10"
        >
          <ImageIcon className="w-5 h-5 text-[#853638]" />
          <h2 className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#853638] font-bold">
            Our Gallery
          </h2>
        </motion.div>

        {/* Gallery Grid Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="p-5 sm:p-7 rounded-3xl frosted-card w-full"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 w-full">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md border border-[#C5A880]/40 bg-[#EDE4D7]"
              >
                <img
                  src={photo}
                  alt={`Prewedding ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#2B1113]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-cinzel text-[11px] text-white tracking-widest uppercase px-3 py-1 rounded-full bg-[#853638]/85 backdrop-blur-xs shadow-md">
                    Lihat Foto
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedIndex]}
                alt="Selected Lightbox"
                className="w-full h-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
