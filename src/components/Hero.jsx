import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

import hero1 from "../images/hero1.jpg";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";
import hero4 from "../images/hero4.jpg";
import hero5 from "../images/hero5.jpg";

const images = [hero1, hero2, hero3, hero4, hero5];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Smooth 8-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 
        FONTS: Outfit (Title) & Montserrat (Body)
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Outfit:wght@400;700;800;900&display=swap');
      */}
      <section id="home" className="relative w-full h-screen min-h-[600px] bg-[#050505] overflow-hidden selection:bg-[#d4a373] selection:text-black">
        
        {/* 1. Cinematic Crossfade Backgrounds */}
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={current}
              src={images[current]}
              alt="Memory SL Live"
              initial={{ opacity: 0, scale: 1.10 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 5 } }}
              transition={{ duration: 8, ease: "easeOut" }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Gradients optimized to ensure text reads well on any device */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10 sm:hidden" />
        </div>

        {/* 2. Main Content Grid */}
        <div className="absolute inset-0 z-30 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-[90%] sm:max-w-2xl md:max-w-3xl">
            
            {/* Classy Eyebrow Text with Hover Glow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 cursor-default group"
            >
              <div className="w-8 sm:w-12 h-[2px] bg-[#d4a373] transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <span className="font-['Montserrat',sans-serif] text-[#d4a373] text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-white">
                Curators of Live Entertainment
              </span>
            </motion.div>

            {/* Huge Geometric Title with Cinematic Soft Glow */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="font-['Outfit',sans-serif] text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight uppercase cursor-default transition-all duration-700 hover:drop-shadow-[0_0_35px_rgba(212,163,115,0.3)]"
            >
              MEMORY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 transition-all duration-700 hover:to-white/80">SL.</span>
            </motion.h1>

            {/* Body Text with Subdued Brightening on Hover */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="font-['Montserrat',sans-serif] text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-xs sm:max-w-md md:max-w-xl mt-6 sm:mt-8 cursor-default transition-colors duration-700 hover:text-white"
            >
              Curating the soundtrack to your most extraordinary moments. A symphony of elegance, high energy, and pure live magic.
            </motion.p>

            {/* Elegant CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 sm:mt-12 flex items-center"
            >
              <button
                onClick={scrollToAbout}
                className="group relative px-8 py-3.5 sm:px-10 sm:py-4 font-['Montserrat',sans-serif] text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white overflow-hidden border border-white/20 transition-all duration-700 hover:border-[#d4a373]/60 hover:bg-[#d4a373]/5"
              >
                <span className="relative z-10 block transition-colors duration-500 ease-out group-hover:text-[#d4a373]">
                  Discover More
                </span>
                {/* Elegant bottom line that draws itself on hover */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4a373] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* 3. Modern Vertical Social Sidebar (Hidden on small screens) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-8 items-center"
        >
          <div className="w-[1px] h-12 md:h-16 bg-white/20" />
          
          <a href="https://youtube.com/@memorysl?si=zWSUo0Sh7UdSsWWi" target="_blank" rel="noreferrer" className="group relative p-2">
            <FaYoutube size={20} className="text-white/50 group-hover:text-white transition-colors duration-300" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-['Montserrat'] text-[10px] md:text-xs tracking-widest text-white whitespace-nowrap">WATCH</span>
          </a>
          
          <a href="https://wa.me/94773709076" target="_blank" rel="noreferrer" className="group relative p-2">
            <SiWhatsapp size={18} className="text-[#d4a373]/70 group-hover:text-[#d4a373] transition-colors duration-300" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-['Montserrat'] text-[10px] md:text-xs tracking-widest text-[#d4a373] whitespace-nowrap">BOOK</span>
          </a>
          
          <a href="https://www.facebook.com/share/1FDKMjXg4q/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="group relative p-2">
            <FaFacebookF size={18} className="text-white/50 group-hover:text-white transition-colors duration-300" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-['Montserrat'] text-[10px] md:text-xs tracking-widest text-white whitespace-nowrap">SOCIAL</span>
          </a>

          <div className="w-[1px] h-12 md:h-16 bg-white/20" />
        </motion.div>

        {/* 4. Active Slide Progress Bar (Bottom Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-10 md:bottom-12 left-6 sm:left-12 md:left-16 lg:left-24 z-30 flex items-center"
        >
          {/* Animated Line Indicator (Responsive widths) */}
          <div className="w-24 sm:w-32 md:w-48 h-[2px] bg-white/10 relative overflow-hidden">
            <motion.div
              key={current}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "linear" }}
              className="absolute top-0 left-0 h-full bg-[#d4a373]"
            />
          </div>
        </motion.div>

        {/* 5. Mobile Socials (Only shows on mobile, pushed safely to the right) */}
        <div className="absolute bottom-6 right-6 z-30 flex sm:hidden gap-5">
          <a href="https://youtube.com/@memorysl?si=zWSUo0Sh7UdSsWWi" className="text-white/50 hover:text-white transition-colors"><FaYoutube size={18} /></a>
          <a href="https://wa.me/94773709076" className="text-[#d4a373]/70 hover:text-[#d4a373] transition-colors"><SiWhatsapp size={16} /></a>
          <a href="https://www.facebook.com/share/1FDKMjXg4q/?mibextid=wwXIfr" className="text-white/50 hover:text-white transition-colors"><FaFacebookF size={16} /></a>
        </div>

      </section>
    </>
  );
}