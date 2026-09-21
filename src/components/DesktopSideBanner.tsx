import React from "react";
import { WeddingConfig } from "../types";

interface DesktopSideBannerProps {
  config: WeddingConfig;
}

export const DesktopSideBanner: React.FC<DesktopSideBannerProps> = ({
  config,
}) => {
  return (
    <aside
      className="hidden lg:flex flex-col justify-between w-[480px] xl:w-[560px] h-screen sticky top-0 p-12 text-[#FAF7F2] border-r border-[#C5A880]/30 overflow-hidden select-none bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.webp')" }}
    >
      {/* Dark Burgundy Overlay */}
      <div className="absolute inset-0 bg-[#2B1113]/85 backdrop-blur-xs pointer-events-none" />

      {/* Floating Flowers: Layer Paling Depan (z-20), Left Flipped, Right Natural */}
      <img
        src="/assets/flower.webp"
        alt="Ornament Top Left Flipped"
        className="absolute z-20 -top-16 -left-16 w-72 opacity-80 pointer-events-none animate-float-left drop-shadow-xl"
      />
      <img
        src="/assets/flower.webp"
        alt="Ornament Bottom Right"
        className="absolute z-20 -bottom-16 -right-16 w-72 opacity-80 pointer-events-none animate-float-right drop-shadow-xl"
      />

      {/* Top Header */}
      <div className="relative z-10">
        <div className="w-10 h-0.5 bg-[#C5A880] mb-4" />
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
          Official Wedding Invitation
        </p>
      </div>

      {/* Center Monogram & Couple Name */}
      <div className="relative z-10 flex flex-col items-start my-auto">
        <div className="relative h-28 flex items-center mb-6">
          <span className="font-script text-8xl text-white/95 leading-none -mr-4 drop-shadow-md">
            {config.monogram.brideInitial}
          </span>
          <span className="font-script text-8xl text-[#C5A880] leading-none -ml-4 -mt-4 drop-shadow-md">
            {config.monogram.groomInitial}
          </span>
        </div>

        <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-[#E5D9C8] mb-2 font-semibold">
          The Wedding Of
        </p>

        <h1 className="font-cormorant italic text-5xl xl:text-6xl text-white font-bold tracking-wide mb-4 leading-tight drop-shadow-lg">
          {config.bride.nickname} &amp; <br />
          {config.groom.nickname}
        </h1>

        <div className="inline-block px-5 py-1.5 rounded-full border border-[#C5A880]/70 bg-[#1A0A0B]/60 backdrop-blur-md shadow-lg mt-2">
          <p className="font-cinzel text-sm tracking-[0.25em] text-[#E5D9C8] font-medium">
            {config.weddingDateFormatted}
          </p>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="relative z-10 pt-8 border-t border-white/15">
        <p className="font-cormorant italic text-base text-[#E5D9C8]/85 leading-relaxed max-w-sm">
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan-pasangan dari jenismu sendiri...”
        </p>
        <p className="font-cinzel text-xs text-[#C5A880] font-bold mt-2 tracking-wider">
          QS. Ar-Rum : 21
        </p>
      </div>
    </aside>
  );
};
