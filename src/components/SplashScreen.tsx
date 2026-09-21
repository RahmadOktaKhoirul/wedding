import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashScreenProps {
  onOpen: () => void;
  guestName?: string;
}

export default function SplashScreen({ onOpen, guestName }: SplashScreenProps) {
  const [phase, setPhase] = React.useState<"waiting" | "logo" | "loading" | "ready" | "exit">("waiting");
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const startedRef = React.useRef(false);

  const playNetflixSound = () => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) {
      audioRef.current?.play().catch(() => {});
      return;
    }
    const ctx = new AudioContext();
    fetch("/netflix.mp3")
      .then((r) => r.arrayBuffer())
      .then((buf) => ctx.decodeAudioData(buf))
      .then((decoded) => {
        const src = ctx.createBufferSource();
        src.buffer = decoded;
        src.connect(ctx.destination);
        src.start(0);
      })
      .catch(() => {
        audioRef.current?.play().catch(() => {});
      });
  };

  const startSequence = React.useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => { video.muted = true; video.play().catch(() => {}); });
      video.onended = () => setPhase("ready");
    }
    setPhase("logo");
  }, []);

  React.useEffect(() => {
    window.addEventListener("pointerdown", startSequence, { once: true });
    return () => window.removeEventListener("pointerdown", startSequence);
  }, [startSequence]);

  const handleOpen = () => {
    setPhase("exit");
    setTimeout(() => onOpen(), 700);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[300] bg-black flex flex-col items-center justify-center select-none cursor-pointer"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: phase === "ready" || phase === "exit" ? 0 : 1, transition: "opacity 0.8s ease", minWidth: "100%", minHeight: "100%" }}
      />
      {/* Teks tap untuk memulai — hanya phase waiting */}
      <AnimatePresence>
        {phase === "waiting" && (
          <motion.p
            key="hint"
            className="text-white/40 text-xs font-mono tracking-[0.3em] uppercase cursor-pointer"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            onClick={() => {
              playNetflixSound();
              startSequence();
            }}
          >
            tap untuk memulai
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">

        {/* PHASE 1: Video playing — no overlay */}
        {phase === "logo" && <motion.div key="logo" />}

        {/* PHASE 3: Ready — WEDFLIX + nama + tombol */}
        {phase === "ready" && (
          <motion.div
            key="ready"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 w-full px-6"
          >
            {/* WEDFLIX wordmark */}
            <motion.svg
              width="100%" height="54" viewBox="0 0 280 54"
              style={{ maxWidth: 280 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <text x="50%" y="46" textAnchor="middle" fontFamily="Impact, Arial Black, sans-serif" fontSize="58" fontWeight="900" fill="#E50914" letterSpacing="-1">WEDFLIX</text>
            </motion.svg>

            {/* Red vertical line */}
            <motion.div
              className="w-[1px] bg-red-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 48, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />

            {/* Names & date */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <p className="text-white font-black text-xl tracking-wide">Renata &amp; Tata</p>
              <p className="text-red-600 text-sm font-mono tracking-[0.4em]">2 · 10 · 2026</p>
            </motion.div>

            {guestName && (
              <motion.div
                className="flex flex-col items-center gap-1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <p className="text-white/40 text-[10px] font-mono tracking-[0.3em] uppercase">Kepada Yth.</p>
                <p className="text-white font-bold text-base tracking-wide">{guestName}</p>
              </motion.div>
            )}

            {/* Buka Sekarang button */}
            <motion.button
              onClick={handleOpen}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              whileHover={{ scale: 1.02, backgroundColor: "#e5e5e5" }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center justify-center gap-3 bg-white text-black font-black text-base overflow-hidden shadow-2xl"
              style={{ width: 320, height: 56, letterSpacing: "0.08em" }}
            >
              <motion.span
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.6) 50%, transparent 65%)" }}
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
              />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="relative z-10">Buka Sekarang</span>
            </motion.button>

            <motion.p
              className="text-[10px] font-mono tracking-[0.25em] uppercase"
              style={{ color: "#444" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
            >
              klik untuk membuka undangan
            </motion.p>
          </motion.div>
        )}

      </AnimatePresence>

      {/* EXIT: Blur fade ke halaman utama */}
      <AnimatePresence>
        {phase === "exit" && (
          <motion.div
            key="curtain"
            className="absolute inset-0 z-50"
            initial={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(0,0,0,0.85)" }}
            animate={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
