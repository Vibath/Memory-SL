import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/Events";
import WeddingPackages from "./components/WeddingPackages";
import Projects from "./components/Projects";
import Members from "./components/Members";
import Soundgear from "./components/Soundgear";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStage, setLoadingStage] = useState(0);

  // The text that cycles while the waveform plays
  const stages = [
    "Calibrating Audio...",
    "Setting the Stage...",
    "Showtime."
  ];

  // The Loading Timer & Text Cycler
  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Cycle the text to build anticipation
    const t1 = setTimeout(() => setLoadingStage(1), 800);
    const t2 = setTimeout(() => setLoadingStage(2), 1600);
    
    // Lift the curtain
    const t3 = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            // The loader slides UP and fades out when it exits
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#d4a373]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center h-24">
              
              {/* Animated Cinematic Audio Waveform */}
              <div className="flex items-center gap-1.5 h-12 mb-6">
                {[
                  ["20%", "60%", "20%"],
                  ["40%", "90%", "40%"],
                  ["60%", "100%", "60%"],
                  ["80%", "40%", "80%"],
                  ["60%", "100%", "60%"],
                  ["40%", "90%", "40%"],
                  ["20%", "60%", "20%"],
                ].map((keyframes, i) => (
                  <motion.div
                    key={i}
                    className="w-[2px] bg-[#d4a373] rounded-full"
                    animate={{ height: keyframes }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1, // Staggers the animation to create a rolling wave
                    }}
                  />
                ))}
              </div>

              {/* Cycling Status Text */}
              <div className="h-4 overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={loadingStage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="font-['Montserrat',sans-serif] text-[9px] sm:text-[10px] text-gray-400 tracking-[0.3em] uppercase block"
                  >
                    {stages[loadingStage]}
                  </motion.span>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- YOUR ACTUAL WEBSITE SECTIONS --- */}
      <div className="bg-[#050505] min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Members />
        <Events />
        <WeddingPackages />
        <Projects />
        <Soundgear />
        <Clients />
        <Contact />
        <BackToTop />
      </div>
    </>
  );
}