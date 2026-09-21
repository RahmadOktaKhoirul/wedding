import React from "react";
import { Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FloatingMusicPlayerProps {
  title: string;
  artist: string;
  onReady?: (play: () => void) => void;
}

const SOUNDCLOUD_URL =
  "https://soundcloud.com/andani-amel-671566597/nadhif-basalamah-kota-ini-tak";

declare global {
  interface Window { SC: any; }
}

export default function FloatingMusicPlayer({ title, artist, onReady }: FloatingMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showCard, setShowCard] = React.useState(false);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);
  const widgetRef = React.useRef<any>(null);

  const initWidget = () => {
    if (!iframeRef.current || !window.SC) return;
    const widget = window.SC.Widget(iframeRef.current);
    widgetRef.current = widget;
    widget.bind(window.SC.Widget.Events.READY, () => {
      widget.setVolume(70);
      // expose play fn to parent (splash screen)
      onReady?.(() => { widget.play(); setIsPlaying(true); });
    });
    widget.bind(window.SC.Widget.Events.PLAY, () => setIsPlaying(true));
    widget.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false));
    widget.bind(window.SC.Widget.Events.FINISH, () => {
      widget.seekTo(0);
      widget.play();
    });
  };

  React.useEffect(() => {
    if (window.SC?.Widget) { initWidget(); return; }
    const existing = document.querySelector('script[src*="soundcloud.com/player/api"]');
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://w.soundcloud.com/player/api.js";
      s.onload = initWidget;
      document.head.appendChild(s);
    } else {
      existing.addEventListener("load", initWidget);
    }
  }, []);

  // show card briefly after play starts
  React.useEffect(() => {
    if (!isPlaying) return;
    setShowCard(true);
    const t = setTimeout(() => setShowCard(false), 4000);
    return () => clearTimeout(t);
  }, [isPlaying]);

  const toggle = () => {
    widgetRef.current?.toggle();
  };

  const embedSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(SOUNDCLOUD_URL)}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false`;

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex items-end gap-3">
      <iframe
        ref={iframeRef}
        src={embedSrc}
        width="1"
        height="1"
        allow="autoplay"
        className="absolute opacity-0 pointer-events-none"
        title="backsound"
      />

      {/* Info card */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg px-2.5 py-1.5 shadow-2xl min-w-[120px] max-w-[150px]"
          >
            <p className="text-[9px] font-semibold text-white leading-tight truncate">{title}</p>
            <p className="text-[8px] text-pink-300/70 mt-0.5 truncate">{artist}</p>
            <div className="flex items-center gap-1 mt-1">
              <span className={`w-1 h-1 rounded-full ${isPlaying ? "bg-pink-400 animate-pulse" : "bg-gray-500"}`} />
              <span className="text-[7px] font-mono uppercase tracking-widest text-gray-400">{isPlaying ? "playing" : "paused"}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <button
        onClick={toggle}
        onMouseEnter={() => setShowCard(true)}
        onMouseLeave={() => setShowCard(false)}
        title={isPlaying ? "Pause musik" : "Play musik"}
        className="relative w-9 h-9 rounded-full flex items-center justify-center shadow-2xl shadow-pink-900/60 active:scale-95 transition-all duration-300"
        style={{
          background: isPlaying
            ? "linear-gradient(135deg, #ec4899, #be185d)"
            : "linear-gradient(135deg, #4a1942, #2d0a28)",
          border: "1px solid rgba(236,72,153,0.3)",
        }}
      >
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full bg-pink-500/25 animate-ping" style={{ animationDuration: "1.5s" }} />
            <span className="absolute -inset-1.5 rounded-full border border-pink-500/15 animate-pulse" />
          </>
        )}
        <div
          className="absolute inset-[5px] rounded-full border-2 border-transparent"
          style={{
            borderTopColor: "rgba(249,168,212,0.6)",
            borderRightColor: "rgba(249,168,212,0.2)",
            animation: isPlaying ? "spin 2.5s linear infinite" : "none",
          }}
        />
        {isPlaying
          ? <Pause className="w-3.5 h-3.5 text-white fill-current relative z-10" />
          : <Play className="w-3.5 h-3.5 text-pink-300 fill-current relative z-10" />
        }
      </button>

      <style>{`
        @keyframes musicBar {
          from { transform: scaleY(0.3); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
