import React from "react";
import { motion } from "motion/react";
import { MapPin, Home, Clock } from "lucide-react";
import { EventDetail } from "../types";

interface EventsSectionProps {
  events: {
    akad: EventDetail;
    resepsi: EventDetail;
    ngunduhMantu?: EventDetail;
  };
}

const EventCard: React.FC<{ event: EventDetail; delay?: number }> = ({
  event,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl frosted-card flex flex-col items-center text-center overflow-hidden"
    >
      {/* Top subtle ornament */}
      <div className="w-12 h-[2px] bg-[#853638] mb-4 opacity-80" />

      {/* Event Title */}
      <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] text-[#853638] uppercase mb-4">
        {event.title}
      </h3>

      {/* Date Block */}
      <div className="flex flex-col items-center mb-4">
        <p className="font-cormorant italic text-lg sm:text-xl font-medium text-[#5A383A]">
          {event.day}
        </p>

        {/* Big Date Number */}
        <div className="my-1 py-1 px-4 rounded-2xl bg-[#EDE4D7]/80 border border-[#C5A880]/40 shadow-inner">
          <span className="font-cormorant text-5xl sm:text-6xl font-bold text-[#853638] leading-tight">
            {event.dateNumber}
          </span>
        </div>

        <p className="font-cormorant italic text-lg sm:text-xl font-medium text-[#5A383A]">
          {event.monthYear}
        </p>
      </div>

      {/* Time */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE4D7]/70 text-[#381618] font-sans text-xs sm:text-sm font-semibold mb-6">
        <Clock className="w-3.5 h-3.5 text-[#853638]" />
        <span>{event.time}</span>
      </div>

      {/* Divider */}
      <div className="w-full flex items-center justify-center gap-3 my-2">
        <div className="h-[1px] bg-[#C5A880]/40 flex-1" />
        <div className="w-8 h-8 rounded-full bg-[#EDE4D7] flex items-center justify-center text-[#853638]">
          <Home className="w-4 h-4" />
        </div>
        <div className="h-[1px] bg-[#C5A880]/40 flex-1" />
      </div>

      {/* Location */}
      <div className="mt-4 mb-6">
        <p className="font-cinzel text-sm font-bold text-[#381618] mb-1">
          {event.locationName}
        </p>
        <p className="font-sans text-xs sm:text-sm text-[#7D6B63] leading-relaxed max-w-xs">
          {event.address}
        </p>
      </div>

      {/* Maps Button */}
      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#853638] hover:bg-[#682426] text-white font-cinzel text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
      >
        <MapPin className="w-4 h-4" />
        <span>Lihat Lokasi</span>
      </a>
    </motion.div>
  );
};

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-8 bg-transparent text-center overflow-hidden">
      {/* Background Ornaments: Layer Paling Depan (z-20), Left Flipped, Right Natural */}
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Left Flipped"
        className="absolute z-20 top-1/4 -left-12 sm:-left-16 w-48 sm:w-64 opacity-90 pointer-events-none animate-float-left drop-shadow-md"
      />
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Right"
        className="absolute z-20 bottom-1/4 -right-12 sm:-right-16 w-48 sm:w-64 opacity-90 pointer-events-none animate-float-right drop-shadow-md"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#853638] font-bold mb-10"
        >
          Rangkaian Acara
        </motion.p>

        {/* Event Cards Grid */}
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 w-full">
          <EventCard event={events.akad} delay={0.15} />
          <EventCard event={events.resepsi} delay={0.3} />
          {events.ngunduhMantu && (
            <EventCard event={events.ngunduhMantu} delay={0.45} />
          )}
        </div>
      </div>
    </section>
  );
};
