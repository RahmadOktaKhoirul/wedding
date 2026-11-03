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
      className="relative hidden lg:flex flex-col justify-between w-[58vw] h-screen sticky top-0 p-10 xl:p-16 text-[#FAF7F2] border-r border-[#C5A880]/30 overflow-hidden select-none bg-[#14271F]"
    >
      <img
        src={config.gallery.photos[0] || config.closing.photo || "/assets/intro.webp"}
        alt={`${config.bride.nickname} dan ${config.groom.nickname}`}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#14271F]/45 via-[#14271F]/35 to-[#14271F]/85" />

      {/* Top Header */}
      <div className="relative z-10">
        <div className="w-10 h-0.5 bg-[#C5A880] mb-4" />
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
          Official Wedding Invitation
        </p>
      </div>

      {/* Center Monogram & Couple Name */}
      <div className="relative z-10 flex flex-col items-center my-auto text-center">
        <div className="flex items-center justify-center mb-5 drop-shadow-lg">
            <span className="font-script text-7xl xl:text-8xl text-white/95 leading-none -mr-3">
              {config.monogram.brideInitial}
            </span>
            <span className="font-script text-7xl xl:text-8xl text-[#E4C994] leading-none -ml-3 -mt-3">
              {config.monogram.groomInitial}
            </span>
        </div>

        {/* Decorative Divider */}
        <div className="w-16 h-[1px] bg-[#E4C994]/80 mb-4 mx-auto" />

        <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-[#E5D9C8] mb-2 font-semibold">
          The Wedding Of
        </p>

        <h1 className="font-cormorant italic text-4xl xl:text-6xl text-white font-bold tracking-wide mb-4 leading-tight drop-shadow-lg">
          {config.bride.nickname} &amp; {config.groom.nickname}
        </h1>

        <div className="inline-block px-5 py-1.5 rounded-full border border-[#C5A880]/70 bg-[#1A0A0B]/60 backdrop-blur-md shadow-lg mt-2">
          <p className="font-cinzel text-sm tracking-[0.25em] text-[#E5D9C8] font-medium">
            {config.weddingDateFormatted}
          </p>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="relative z-10 pt-8 border-t border-white/30">
        <p className="font-cormorant italic text-lg text-white/90 leading-relaxed max-w-lg drop-shadow-md">
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan-pasangan dari jenismu sendiri...”
        </p>
        <p className="font-cinzel text-xs text-[#E4C994] font-bold mt-2 tracking-wider">
          QS. Ar-Rum : 21
        </p>
      </div>
    </aside>
  );
};
