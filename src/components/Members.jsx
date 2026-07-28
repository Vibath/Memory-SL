import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sachith from "../images/sachith.jpg";
import pahan from "../images/pahan.jpg";
import sachithra from "../images/sachithra.jpg";
import kalum from "../images/kalum.jpg";
import lahiru from "../images/lahiru.jpg";
import rukshan from "../images/rukshan.jpg";
import bucky from "../images/bucky.jpg";

const members = [
  {
    name: "Sachith",
    role: "Frontman",
    image: sachith,
    description:
      "Sachith is the iconic voice and soul of Memory SL. As the frontman and a contestant of The Voice Sri Lanka, he brings a unique blend of emotional depth and high-voltage performance to the stage. Known for his ability to masterfully deliver any genre, his stage presence captivates audiences and sets the tone for every show.",
  },
  {
    name: "Pahan",
    role: "Vocalist",
    image: pahan,
    description:
      "Pahan brings a rich, deep vocal resonance that perfectly grounds the band's sound. His soulful, velvety timbre blends seamlessly with Sachith's dynamic range, adding incredible depth and rich harmonies to create a truly captivating and powerful frontman duo.",
  },
  {
    name: "Sachithra",
    role: "Keyboardist & Producer",
    image: sachithra,
    description:
      "The musical architect behind the scenes, Sachithra is not only the band’s keyboardist but also its music producer. With a deep love for synths and electronic textures, he crafts the rich, layered sound that defines Memory SL, bringing both innovation and emotion to the arrangements.",
  },
  {
    name: "Kalum",
    role: "Bassist",
    image: kalum,
    description:
      "Kalum is the groove engine of Memory SL. With smooth yet punchy basslines, he anchors the band’s rhythm section with precision and soul. Whether it's a laid-back groove or a high-energy anthem, his playing brings weight and depth to every song.",
  },
  {
    name: "Lahiru",
    role: "Drummer",
    image: lahiru,
    description:
      "Lahiru is the heartbeat of the band — a powerful and energetic drummer known for his tight timing and explosive fills. His heavy-hitting style and commanding stage presence electrify the crowd and drive the band's energy from start to finish.",
  },
  {
    name: "Rukshan",
    role: "Guitarist",
    image: rukshan,
    description:
      "Rukshan delivers crisp, clean guitar parts that add clarity and punch to the band’s arrangements. A rising talent, he brings fresh energy and a modern edge to the stage while fitting seamlessly into the band's signature sound.",
  },
  {
    name: "Bucky",
    role: "Band Manager",
    image: bucky,
    description:
      "The strategic force behind Memory SL. From event coordination to client communication, Bucky manages the business side of the band with precision and professionalism. His vision and execution play a vital role in shaping the band’s legacy."
  }
];

export default function BandMembers() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hasHover, setHasHover] = useState(true);

  // Check if the device has a mouse (desktop) or is touch-only (mobile)
  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const handleMouseEnter = (index) => {
    if (hasHover) setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    if (hasHover) setActiveIndex(null);
  };

  const handleCardTap = (index) => {
    // On mobile, tap toggles the card open and closed
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="members" className="relative bg-[#050505] py-24 md:py-32 px-6 overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#d4a373]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-8 h-[2px] bg-[#d4a373]" />
            <span className="font-['Montserrat',sans-serif] text-[#d4a373] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
              The Collective
            </span>
            <div className="w-8 h-[2px] bg-[#d4a373]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Outfit',sans-serif] text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Artists.</span>
          </motion.h2>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 place-items-center">
          {members.map((member, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              key={member.name}
              className="relative w-full max-w-[320px] sm:max-w-full aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer border border-white/5 shadow-2xl"
              onClick={() => handleCardTap(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Member Image - Turns to color when tapped or hovered */}
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover transition-all duration-700 ease-out 
                  ${activeIndex === index ? "grayscale-0 scale-105" : "grayscale-[20%]"} 
                  md:group-hover:grayscale-0 md:group-hover:scale-105
                `}
              />

              {/* Mobile Visual Cue: "Tap for Bio" Badge (Hidden on Desktop) */}
              <div className={`absolute top-4 right-4 md:hidden transition-opacity duration-300 ${activeIndex === index ? "opacity-0" : "opacity-100"}`}>
                <div className="bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d4a373] rounded-full animate-pulse" />
                  <span className="text-white text-[9px] uppercase tracking-widest font-['Montserrat',sans-serif]">Tap for Bio</span>
                </div>
              </div>

              {/* Default Bottom Gradient & Name */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20 transition-opacity duration-500 z-10">
                <h3 className="font-['Outfit',sans-serif] text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="font-['Montserrat',sans-serif] text-xs text-[#d4a373] tracking-[0.2em] uppercase mt-1">
                  {member.role}
                </p>
              </div>

              {/* Animated Frosted Glass Reveal for Description */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 z-20 bg-black/70 backdrop-blur-md p-6 flex flex-col justify-end border-t border-white/10"
                  >
                    <div className="mb-auto mt-4">
                      <h3 className="font-['Outfit',sans-serif] text-2xl font-bold text-white uppercase tracking-wide mb-1">
                        {member.name}
                      </h3>
                      <div className="w-8 h-[2px] bg-[#d4a373] mb-4" />
                      <p className="font-['Montserrat',sans-serif] text-sm text-gray-300 leading-relaxed font-light">
                        {member.description}
                      </p>
                    </div>
                    
                    {/* Close text for mobile users */}
                    <p className="font-['Montserrat',sans-serif] text-[9px] text-gray-500 tracking-[0.2em] uppercase text-center mt-4 md:hidden">
                      Tap to close
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}