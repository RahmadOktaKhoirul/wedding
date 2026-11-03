import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { WeddingConfig } from "../types";

interface HeroOpeningProps {
  config: WeddingConfig;
  isOpened: boolean;
}

export const HeroOpening: React.FC<HeroOpeningProps> = ({ config, isOpened }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  // Play video when invitation is opened with fallback timeout
  useEffect(() => {
    if (!isOpened) return;

    // Safety fallback: ensure text appears even if mobile browser delays or blocks video
    const fallbackTimer = setTimeout(() => {
      setIsVideoEnded(true);
    }, 4500);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .catch((err) => {
          console.warn("Autoplay notice:", err);
          // If autoplay blocked, reveal after short delay
          setTimeout(() => setIsVideoEnded(true), 1500);
        });
    }

    return () => clearTimeout(fallbackTimer);
  }, [isOpened]);

  const handleVideoEnded = () => {
    setIsVideoEnded(true);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    // Reveal text slightly before absolute end for seamless transition
    if (video.duration && video.currentTime >= video.duration - 0.6) {
      setIsVideoEnded(true);
    }
  };

  return (
    <section
      onClick={() => {
        if (!isVideoEnded) setIsVideoEnded(true);
      }}
      className="invitation-panel invitation-panel--hero relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center text-center overflow-hidden bg-white cursor-pointer"
    >
      {/* Background Video (Fast-stream, Clean, Plays Once Without Loop) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          onTimeUpdate={handleTimeUpdate}
          onError={() => setIsVideoEnded(true)}
          className="w-full h-full object-cover object-center scale-100"
        >
          <source src="/assets/opening_flower.mp4" type="video/mp4" />
          <source src="/opening_flower.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle skip prompt while video is playing */}
      {!isVideoEnded && isOpened && (
        <div className="absolute bottom-6 z-20 px-3 py-1 rounded-full bg-white/70 backdrop-blur-xs border border-[#C5A880]/40 text-[#853638] text-[11px] font-cinzel tracking-widest uppercase shadow-xs animate-pulse pointer-events-none">
          Ketuk layar untuk lewati
        </div>
      )}

      {/* Content positioned precisely in the center of the video's white frame */}
      <div className="relative z-10 px-6 py-4 flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md my-auto">
        <AnimatePresence>
          {isVideoEnded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center justify-center text-center select-none"
            >
              {/* Monogram Inisial with Gradient */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-20 sm:h-24 flex items-center justify-center mb-1"
              >
                <span className="font-script text-7xl sm:text-8xl gradient-monogram leading-none -mr-3 drop-shadow-sm">
                  {config.monogram.brideInitial}
                </span>
                <span className="font-script text-7xl sm:text-8xl text-[#C5A880] leading-none -ml-3 -mt-3 drop-shadow-sm">
                  {config.monogram.groomInitial}
                </span>
              </motion.div>

              {/* The Wedding Of */}
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase text-[#853638] font-bold mb-2"
              >
                The Wedding Of
              </motion.p>

              {/* Couple Names */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-cormorant italic text-3xl sm:text-5xl text-[#381618] font-bold tracking-wide mb-3"
              >
                {config.bride.nickname} &amp; {config.groom.nickname}
              </motion.h1>

              {/* Wedding Date */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="inline-block px-4 py-1 rounded-full border border-[#C5A880]/50 bg-[#FAF7F2]/80 shadow-xs mb-8"
              >
                <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#7D6B63] font-semibold">
                  {config.weddingDateFormatted}
                </p>
              </motion.div>

              {/* Scroll Down Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="flex flex-col items-center gap-1 cursor-pointer group"
                onClick={(event) => {
                  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth";
                  const main = event.currentTarget.closest("main");
                  if (main && window.matchMedia("(min-width: 1024px)").matches) {
                    main.scrollTo({ top: main.scrollTop + main.clientHeight, behavior });
                  } else {
                    window.scrollTo({ top: window.innerHeight, behavior });
                  }
                }}
              >
                <span className="text-[10px] sm:text-[11px] font-cinzel tracking-[0.2em] text-[#853638] uppercase font-bold">
                  Scroll ke Bawah
                </span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="w-7 h-7 rounded-full bg-[#853638]/10 border border-[#853638]/30 flex items-center justify-center text-[#853638] shadow-xs group-hover:bg-[#853638] group-hover:text-white transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
