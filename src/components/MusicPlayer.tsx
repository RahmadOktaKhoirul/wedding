import React, { useState, useEffect, useRef } from "react";
import { Disc3, Pause, Play } from "lucide-react";

interface MusicPlayerProps {
  audioSrc: string;
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  audioSrc,
  autoPlayTrigger = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay blocked by browser policy:", err);
        });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  // Pause audio if document visibility changes to hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      {/* Floating Disc Button */}
      <button
        onClick={togglePlay}
        title={isPlaying ? "Jeda Musik" : "Putar Musik"}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2B1113] border-2 border-[#C5A880] text-[#FAF7F2] shadow-2xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
      >
        <div
          className={`w-full h-full rounded-full flex items-center justify-center ${
            isPlaying ? "animate-spin-slow" : ""
          }`}
        >
          <Disc3 className="w-8 h-8 sm:w-9 sm:h-9 text-[#C5A880]" />
        </div>

        {/* Center Pause/Play icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#2B1113]/40 rounded-full">
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white drop-shadow" />
          ) : (
            <Play className="w-4 h-4 text-white drop-shadow ml-0.5" />
          )}
        </div>
      </button>
    </>
  );
};
