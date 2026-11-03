import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, CalendarPlus } from "lucide-react";
import { EventDetail } from "../types";

interface CountdownSectionProps {
  targetDate: string;
  event: EventDetail;
  coupleNames: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({
  targetDate,
  event,
  coupleNames,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];
  const date = targetDate.slice(0, 10).replaceAll("-", "");
  const nextDay = new Date(`${targetDate.slice(0, 10)}T00:00:00`);
  nextDay.setDate(nextDay.getDate() + 1);
  const endDate = [
    nextDay.getFullYear(),
    String(nextDay.getMonth() + 1).padStart(2, "0"),
    String(nextDay.getDate()).padStart(2, "0"),
  ].join("");
  const calendarUrl = new URL("https://calendar.google.com/calendar/render");
  calendarUrl.search = new URLSearchParams({
    action: "TEMPLATE",
    text: `Pernikahan ${coupleNames}`,
    dates: `${date}/${endDate}`,
    details: `${event.title} - ${event.fullDate}, ${event.time}`,
    location: `${event.locationName}, ${event.address}`,
    ctz: "Asia/Jakarta",
  }).toString();

  return (
    <section className="invitation-panel invitation-panel--countdown relative w-full py-16 px-4 sm:px-8 text-center overflow-hidden">
      {/* Front Layer Flower Ornaments (z-20) */}
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Left Flipped"
        className="absolute z-0 top-1/2 -translate-y-1/2 -left-10 sm:-left-12 w-40 sm:w-52 opacity-90 pointer-events-none animate-float-left drop-shadow-md"
      />
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Right"
        className="absolute z-0 top-1/2 -translate-y-1/2 -right-10 sm:-right-12 w-40 sm:w-52 opacity-90 pointer-events-none animate-float-right drop-shadow-md"
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-md mx-auto p-6 sm:p-8 rounded-3xl frosted-card flex flex-col items-center"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-2 mb-6"
        >
          <Calendar className="w-5 h-5 text-[#853638]" />
          <h2 className="font-cinzel text-base sm:text-lg tracking-[0.25em] uppercase text-[#853638] font-bold">
            Save The Date
          </h2>
        </motion.div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 w-full">
          {timeUnits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-[#FAF7F2] to-[#EDE4D7] border border-[#C5A880]/50 shadow-md"
            >
              <span className="font-cormorant text-2xl sm:text-4xl font-bold text-[#853638]">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="font-cinzel text-[10px] sm:text-xs tracking-wider uppercase text-[#7D6B63] font-bold mt-1">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
        <a
          href={calendarUrl.toString()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#853638]/40 px-5 py-2.5 font-cinzel text-xs font-semibold tracking-wider text-[#853638] transition-colors hover:bg-[#853638] hover:text-white"
        >
          <CalendarPlus className="h-4 w-4" />
          Simpan ke Kalender
        </a>
      </motion.div>
    </section>
  );
};
