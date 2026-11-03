import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { WeddingConfig } from "../types";

interface LoveStorySectionProps {
  loveStory: WeddingConfig["loveStory"];
}

export const LoveStorySection: React.FC<LoveStorySectionProps> = ({
  loveStory,
}) => {
  return (
    <section className="invitation-panel invitation-panel--story relative w-full py-16 px-4 sm:px-8 text-center overflow-hidden">
      {/* Background Ornament Accents: Layer Paling Depan (z-20), Left Flipped, Right Natural */}
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Left Flipped"
        className="absolute z-0 top-8 -left-10 sm:-left-12 w-44 sm:w-56 opacity-90 pointer-events-none animate-float-left drop-shadow-md"
      />
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Right"
        className="absolute z-0 bottom-8 -right-10 sm:-right-12 w-44 sm:w-56 opacity-90 pointer-events-none animate-float-right drop-shadow-md"
      />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-script text-4xl sm:text-5xl text-[#853638] mb-2 leading-none"
        >
          {loveStory.title || "love story"}
        </motion.p>

        {/* Subtitle / Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant italic text-base sm:text-lg text-[#5A383A] leading-relaxed max-w-md mb-8 whitespace-pre-line"
        >
          {loveStory.quote}
        </motion.p>

        {/* Highlight Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-[#FAF7F2] to-[#EDE4D7] border border-[#C5A880]/50 shadow-xl mb-10"
        >
          <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden">
            <img
              src={loveStory.mainPhoto || "/assets/intro.png"}
              alt="Love Story Highlight"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Timeline Stories with frosted glass styling */}
        <div className="w-full flex flex-col gap-6 text-left">
          {loveStory.stories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-7 rounded-3xl frosted-card"
            >
              {/* Phase Title */}
              <div className="flex items-center gap-2 mb-2.5">
                <Heart className="w-4 h-4 text-[#853638] fill-[#853638]" />
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#853638] tracking-wide">
                  {item.phase} :
                </h4>
              </div>

              {/* Story text */}
              <p className="font-sans text-xs sm:text-sm text-[#6B5048] leading-relaxed text-justify">
                {item.story}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
