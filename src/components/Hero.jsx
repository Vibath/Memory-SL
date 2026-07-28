import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

// --- DESKTOP IMAGES (Horizontal/Landscape) ---
import dHero1 from "../images/desktop-hero1.jpg";
import dHero2 from "../images/desktop-hero2.jpg";
import dHero3 from "../images/desktop-hero3.jpg";
import dHero4 from "../images/desktop-hero4.jpg";
import dHero5 from "../images/desktop-hero5.jpg";

// --- MOBILE IMAGES (Vertical/Portrait) ---
import mHero1 from "../images/mobile-hero1.webp";
import mHero2 from "../images/mobile-hero2.webp";
import mHero3 from "../images/mobile-hero3.webp";
import mHero4 from "../images/sachithra.webp";
import mHero5 from "../images/mobile-hero5.webp";
import mHero6 from "../images/mobile-hero6.webp";
import mHero7 from "../images/mobile-hero7.webp";
import mHero8 from "../images/mobile-hero8.webp";

const desktopImages = [dHero1, dHero2, dHero3, dHero4, dHero5];
const mobileImages = [mHero1, mHero2, mHero3, mHero4, mHero5, mHero6, mHero7, mHero8];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Detect screen size to serve correct images
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is Tailwind's 'md' breakpoint
    };
    
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeImages = isMobile ? mobileImages : desktopImages;

  // 2. Smooth 8-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % activeImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeImages.length]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="home" className="relative w-full h-screen min-h-[600px] bg-[#050505] overflow-hidden selection:bg-[#d4a373] selection:text-black">
        
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          {/* Removed mode="popLayout" to allow smooth overlapping crossfades */}
          <AnimatePresence>
            <motion.img
              key={`${isMobile ? 'm' : 'd'}-${current}`}
              src={activeImages[current]}
              alt="Memory SL Live"
              fetchPriority="high" /* Forces mobile browsers to download this first */
              loading="eager"
              initial={{ opacity: 0, scale: 1.15 }} // Start slightly zoomed in
              animate={{ opacity: 0.6, scale: 1 }} // End at normal scale
              exit={{ opacity: 0 }} // Fade out perfectly to black/next image
              transition={{
                // Separate timing for opacity and scale
                opacity: { duration: 2, ease: "easeInOut" }, // Smooth 2-second crossfade
                scale: { duration: 20, ease: "linear" } // 20-second linear zoom so it NEVER stops moving during the 8s slide
              }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90 z-10 md:hidden" />
        </div>

        {/* =========================================
            DESKTOP VERSION (Hidden on Mobile)
            ========================================= */}
        <div className="hidden md:flex absolute inset-0 z-30 flex-col justify-center px-12 lg:px-24">
          <div className="max-w-2xl lg:max-w-3xl">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-4 mb-6 cursor-default group"
            >
              <div className="w-12 h-[2px] bg-[#d4a373] transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <span className="font-['Montserrat',sans-serif] text-[#d4a373] text-xs lg:text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-white">
                Curators of Live Entertainment
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="font-['Outfit',sans-serif] text-7xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight uppercase cursor-default transition-all duration-700 hover:drop-shadow-[0_0_35px_rgba(212,163,115,0.3)]"
            >
              MEMORY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 transition-all duration-700 hover:to-white/80">SL.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="font-['Montserrat',sans-serif] text-gray-400 text-sm lg:text-lg font-light leading-relaxed max-w-xl mt-8 cursor-default transition-colors duration-700 hover:text-white"
            >
              Curating the soundtrack to your most extraordinary moments. A symphony of elegance, high energy, and pure live magic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 flex items-center"
            >
              <button
                onClick={scrollToAbout}
                className="group relative px-10 py-4 font-['Montserrat',sans-serif] text-xs tracking-[0.2em] uppercase text-white overflow-hidden border border-white/20 transition-all duration-700 hover:border-[#d4a373]/60 hover:bg-[#d4a373]/5"
              >
                <span className="relative z-10 block transition-colors duration-500 ease-out group-hover:text-[#d4a373]">
                  Discover More
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4a373] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
              </button>
            </motion.div>
          </div>

          {/* Desktop Vertical Social Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="absolute right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-8 items-center"
          >
            <div className="w-[1px] h-16 bg-white/20" />
            <a href="https://youtube.com/@memorysl" target="_blank" rel="noreferrer" className="group relative p-2"><FaYoutube size={20} className="text-white/50 group-hover:text-white transition-colors duration-300" /><span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-['Montserrat'] text-xs tracking-widest text-white whitespace-nowrap">WATCH</span></a>
            <a href="https://wa.me/94773709076" target="_blank" rel="noreferrer" className="group relative p-2"><SiWhatsapp size={18} className="text-[#d4a373]/70 group-hover:text-[#d4a373] transition-colors duration-300" /><span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-['Montserrat'] text-xs tracking-widest text-[#d4a373] whitespace-nowrap">BOOK</span></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="group relative p-2"><FaFacebookF size={18} className="text-white/50 group-hover:text-white transition-colors duration-300" /><span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-['Montserrat'] text-xs tracking-widest text-white whitespace-nowrap">SOCIAL</span></a>
            <div className="w-[1px] h-16 bg-white/20" />
          </motion.div>

          {/* Desktop Progress Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 left-12 lg:left-24 z-30 flex items-center"
          >
            <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden">
              <motion.div key={current} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 8, ease: "linear" }} className="absolute top-0 left-0 h-full bg-[#d4a373]" />
            </div>
          </motion.div>
        </div>

        {/* =========================================
            MOBILE VERSION (Hidden on Desktop)
            ========================================= */}
        <div className="flex md:hidden absolute inset-0 z-30 flex-col justify-center items-center text-center px-6 pt-12 pb-24">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center gap-3 mb-6"
          >
            <span className="font-['Montserrat',sans-serif] text-[#d4a373] text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase">
              Where Memories Come Alive
            </span>
            <div className="w-12 h-[2px] bg-[#d4a373]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="font-['Outfit',sans-serif] text-6xl sm:text-7xl font-black text-white leading-[0.95] tracking-tight uppercase"
          >
            MEMORY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">SL.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="font-['Montserrat',sans-serif] text-gray-300 text-xs sm:text-sm font-light leading-relaxed max-w-[280px] sm:max-w-sm mt-6"
          >
            Curating the soundtrack to your most extraordinary moments. A symphony of elegance and pure live magic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8"
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-3.5 font-['Montserrat',sans-serif] text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white border border-white/20 bg-black/20 backdrop-blur-sm active:bg-[#d4a373]/20 transition-colors"
            >
              Discover More
            </button>
          </motion.div>

          {/* Mobile Bottom Bar: Socials + Progress */}
          <div className="absolute bottom-8 w-full px-8 flex flex-col items-center gap-6 z-30">
            {/* Mobile Socials */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="flex items-center gap-8"
            >
              <a href="https://youtube.com/@memorysl" className="text-white/70 hover:text-white transition-colors"><FaYoutube size={22} /></a>
              <a href="https://wa.me/94773709076" className="text-[#d4a373] hover:text-[#d4a373]/70 transition-colors"><SiWhatsapp size={20} /></a>
              <a href="https://facebook.com" className="text-white/70 hover:text-white transition-colors"><FaFacebookF size={20} /></a>
            </motion.div>

            {/* Mobile Progress Bar */}
            <div className="w-full max-w-[200px] h-[2px] bg-white/20 relative overflow-hidden">
              <motion.div key={current} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 8, ease: "linear" }} className="absolute top-0 left-0 h-full bg-[#d4a373]" />
            </div>
          </div>
        </div>

      </section>
    </>
  );
}