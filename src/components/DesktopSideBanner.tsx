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
      className="hidden lg:flex flex-col justify-between w-[400px] xl:w-[480px] 2xl:w-[560px] h-screen sticky top-0 p-10 xl:p-12 text-[#FAF7F2] border-r border-[#C5A880]/30 overflow-hidden select-none bg-[#14271F]"
    >
      {/* Keep the floral details behind the text and portrait. */}
      <img
        src="/assets/flower.webp"
        alt="Ornament Top Left Flipped"
        className="absolute z-0 -top-16 -left-16 w-72 opacity-35 pointer-events-none animate-float-left drop-shadow-xl"
      />
      <img
        src="/assets/flower.webp"
        alt="Ornament Bottom Right"
        className="absolute z-0 -bottom-16 -right-16 w-72 opacity-35 pointer-events-none animate-float-right drop-shadow-xl"
      />

      {/* Top Header */}
      <div className="relative z-10">
        <div className="w-10 h-0.5 bg-[#C5A880] mb-4" />
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#C5A880] font-semibold">
          Official Wedding Invitation
        </p>
      </div>

      {/* Center Monogram & Couple Name */}
      <div className="relative z-10 flex flex-col items-center my-auto text-center">
        <div className="relative w-full max-w-[330px] h-[min(36vh,340px)] min-h-[220px] mb-6 overflow-hidden rounded-t-full rounded-b-2xl border border-[#C5A880]/70 bg-[#0B1B15] shadow-2xl">
          <img
            src={config.gallery.photos[0] || config.closing.photo || "/assets/intro.webp"}
            alt={`${config.bride.nickname} dan ${config.groom.nickname}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14271F]/55 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <span className="font-script text-6xl text-white/95 leading-none -mr-3 drop-shadow-md">
              {config.monogram.brideInitial}
            </span>
            <span className="font-script text-6xl text-[#C5A880] leading-none -ml-3 -mt-3 drop-shadow-md">
              {config.monogram.groomInitial}
            </span>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="w-16 h-[1px] divider-ornament mb-4 mx-auto" />

        <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-[#E5D9C8] mb-2 font-semibold">
          The Wedding Of
        </p>

        <h1 className="font-cormorant italic text-4xl xl:text-5xl text-white font-bold tracking-wide mb-4 leading-tight drop-shadow-lg">
          {config.bride.nickname} &amp; {config.groom.nickname}
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
