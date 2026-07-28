import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import soundgearLogo from "../images/soundgear-logo.png"; 
import soundgearPhoto from "../images/soundgear-main.JPG"; 
import jbl from "../images/jbl.jpg";
import siImpact from "../images/soundcraft.jpg"; // Renamed for Soundcraft
import pdp from "../images/pdp-drum.jpg";
import lights from "../images/lights.jpg";

const gearList = [
  {
    name: "JBL VRX900 PA System",
    image: jbl,
    description:
      "Premium JBL VRX900 line array system — delivers crisp, immersive sound coverage perfect for large weddings, concerts, and corporate events.",
  },
  {
    name: "Soundcraft Si Impact",
    image: siImpact,
    description:
      "Renowned for its legendary British EQ and pristine audio quality. This console delivers unmatched digital mixing power with a seamless, hands-on workflow.",
  },
  {
    name: "PDP MX Series Drum Kit",
    image: pdp,
    description:
      "A versatile 5-piece drum kit from PDP. Known for punchy toms and deep snare impact — a highly trusted kit loved by professional stage drummers.",
  },
  {
    name: "Stage Essentials",
    image: lights, 
    description: (
      <ul className="list-none space-y-3 text-xs sm:text-sm text-gray-400 font-light">
        <li className="flex items-start gap-2">
          <span className="text-[#d4a373] mt-0.5">✦</span>
          <span><strong className="text-white font-medium">Amplifiers:</strong> High-headroom power amps with zero distortion.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#d4a373] mt-0.5">✦</span>
          <span><strong className="text-white font-medium">Guitar Rigs:</strong> Custom heads/cabs for rich rhythm & lead tones.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#d4a373] mt-0.5">✦</span>
          <span><strong className="text-white font-medium">Stage Lighting:</strong> Intelligent lighting synchronized to the music.</span>
        </li>
      </ul>
    ),
  },
];

export default function Soundgear() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="soundgear" className="relative w-full bg-[#050505] py-24 md:py-32 px-6 overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#d4a373]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={soundgearLogo}
            alt="Memory SoundGear Logo"
            className="h-16 md:h-24 object-contain mb-8"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-['Outfit',sans-serif] text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
              The Heartbeat of <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#e6c9a5]">
                Our Sound.
              </span>
            </h2>
            <p className="font-['Montserrat',sans-serif] text-gray-400 font-light text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              Soundgear is the dedicated audio and visual infrastructure of Memory SL. Available island-wide, it’s the full professional setup we trust for every performance. Featuring JBL VRX arrays, Soundcraft mixing, and high-end staging, Soundgear ensures every beat hits with absolute clarity and cinematic power.
            </p>
          </motion.div>
        </div>

        {/* Cinematic Main Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5 bg-zinc-900 group"
        >
          <img
            src={soundgearPhoto}
            alt="Memory Soundgear Full Setup"
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Inner Vignette Shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setExpanded(!expanded)}
            className="group relative px-8 py-4 font-['Montserrat',sans-serif] text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white overflow-hidden border border-white/20 transition-all duration-700 hover:border-[#d4a373]/60 hover:bg-[#d4a373]/5 bg-black/20 backdrop-blur-sm"
          >
            <span className="relative z-10 block transition-colors duration-500 ease-out group-hover:text-[#d4a373] flex items-center gap-3">
              {expanded ? "Close Tech Specs" : "Explore Technical Specs"}
              {/* Chevron Icon that flips when open */}
              <svg 
                className={`w-4 h-4 transition-transform duration-500 ${expanded ? "rotate-180 text-[#d4a373]" : "group-hover:translate-y-1"}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4a373] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
          </button>
        </div>

        {/* Expanded Tech Specs Grid */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4">
                {gearList.map((gear, index) => (
                  <motion.div
                    key={gear.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-[#d4a373]/30 transition-colors duration-500"
                  >
                    {/* Item Image */}
                    <div className="w-full aspect-[4/3] overflow-hidden">
                      <img
                        src={gear.image}
                        alt={gear.name}
                        className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    </div>
                    
                    {/* Item Text */}
                    <div className="p-6 md:p-8">
                      <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#d4a373] transition-colors duration-300">
                        {gear.name}
                      </h3>
                      <div className="font-['Montserrat',sans-serif] text-xs text-gray-400 font-light leading-relaxed">
                        {gear.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}