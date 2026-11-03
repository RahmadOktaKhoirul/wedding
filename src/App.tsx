import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, MotionConfig } from "motion/react";
import { WEDDING_DATA } from "./wedding";
import { CoverModal } from "./components/CoverModal";
import { HeroOpening } from "./components/HeroOpening";
import { QuoteSection } from "./components/QuoteSection";
import { CoupleSection } from "./components/CoupleSection";
import { CountdownSection } from "./components/CountdownSection";
import { EventsSection } from "./components/EventsSection";
import { LoveStorySection } from "./components/LoveStorySection";
import { GallerySection } from "./components/GallerySection";
import { WeddingGiftSection } from "./components/WeddingGiftSection";
import { RSVPSection } from "./components/RSVPSection";
import { ClosingSection } from "./components/ClosingSection";
import { MusicPlayer } from "./components/MusicPlayer";
import { DesktopSideBanner } from "./components/DesktopSideBanner";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState("");
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    mainRef.current?.scrollTo(0, 0);

    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) {
      setGuestName(to);
      document.title = `The Wedding of ${WEDDING_DATA.bride.nickname} & ${WEDDING_DATA.groom.nickname} - Special for ${to}`;
    } else {
      document.title = `The Wedding of ${WEDDING_DATA.bride.nickname} & ${WEDDING_DATA.groom.nickname}`;
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="relative min-h-screen bg-[#14271F] flex justify-center selection:bg-[#853638] selection:text-white">
      {/* Global Fixed Background (Mobile tailored 9:19.5 + Desktop, Locked from scrolling shift) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          height: "100lvh",
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
        }}
      >
        <picture className="block w-full h-full">
          <source media="(max-width: 640px)" srcSet="/assets/background-mobile.webp" />
          <img
            src="/assets/background.webp"
            alt="Wedding Background"
            className="w-full h-full object-cover object-center pointer-events-none select-none"
          />
        </picture>
        {/* Soft antique warm tone overlay */}
        <div className="absolute inset-0 bg-[#14271F]/10 pointer-events-none" />
      </div>

      {/* Cover Popup Modal */}
      <AnimatePresence>
        {!isOpened && (
          <CoverModal
            config={WEDDING_DATA}
            guestName={guestName}
            isOpen={!isOpened}
            onOpen={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* Main Container Wrapper */}
      <div className="relative z-10 w-full flex justify-center lg:h-screen lg:overflow-hidden">
        {/* Left Side Banner for Desktop View */}
        <DesktopSideBanner config={WEDDING_DATA} />

        {/* Main Interactive Invitation Column (Transparent so background.png shines through) */}
        <main ref={mainRef} className="relative z-10 w-full max-w-xl min-h-screen shadow-2xl flex flex-col bg-transparent lg:h-screen lg:min-h-0 lg:overflow-y-auto">
          {/* Section 1: Hero Opening Video & Monogram */}
          <HeroOpening config={WEDDING_DATA} isOpened={isOpened} />

          {/* Section 2: With Love Quote (Ar-Rum: 21) & Portrait Photo */}
          <QuoteSection config={WEDDING_DATA} />

          {/* Section 3: Bride & Groom Details */}
          <CoupleSection config={WEDDING_DATA} />

          {/* Section 4: Save The Date & Countdown */}
          <CountdownSection
            targetDate={WEDDING_DATA.countdownDate}
            event={WEDDING_DATA.events.akad}
            coupleNames={`${WEDDING_DATA.bride.nickname} & ${WEDDING_DATA.groom.nickname}`}
          />

          {/* Section 5: Rangkaian Acara (Akad, Resepsi, Ngunduh Mantu) */}
          <EventsSection events={WEDDING_DATA.events} />

          {/* Section 6: Love Story Timeline */}
          <LoveStorySection loveStory={WEDDING_DATA.loveStory} />

          {/* Section 7: Our Gallery & Lightbox */}
          <GallerySection photos={WEDDING_DATA.gallery.photos} />

          {/* Section 8: Wedding Gift & Cashless */}
          <WeddingGiftSection gift={WEDDING_DATA.gift} />

          {/* Section 9: Wishes & RSVP Form */}
          <RSVPSection guestName={guestName} />

          {/* Section 10: Closing Words & Signature */}
          <ClosingSection config={WEDDING_DATA} />
        </main>
      </div>

      {/* Floating Rotating Disc Music Player */}
      <MusicPlayer
        audioSrc={WEDDING_DATA.audio.src}
        autoPlayTrigger={isOpened}
      />
    </div>
    </MotionConfig>
  );
}
