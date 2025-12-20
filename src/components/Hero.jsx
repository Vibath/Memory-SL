import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex flex-col justify-center items-center min-h-screen bg-black overflow-hidden px-6 text-white text-center font-['Poppins']">

      {/* Background slideshow */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`background-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 0.5 : 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full object-cover transition-opacity duration-1000"
          />
        ))}
        <div className="absolute inset-0 bg-black/80 z-10" />
      </div>

      {/* Light ring animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-[#a27c5c]/20 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-30 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-[#d4a373]"
      >
        MEMORY SL
      </motion.h1>

      {/* Underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "50%" }}
        transition={{ duration: 1.5, delay: 1 }}
        className="h-1 bg-[#d4a373] rounded mx-auto mt-2 mb-6 z-30"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="max-w-md md:max-w-xl text-zinc-300 text-base sm:text-lg md:text-xl z-30"
      >
        Sri Lanka’s premier wedding & live music band. Bringing your events alive — weddings, concerts, corporate nights, and unforgettable celebrations.
      </motion.p>

      {/* Discover More Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="mt-8 px-8 py-2 sm:px-10 sm:py-3 rounded-full bg-[#8b5e3c] hover:bg-[#a27c5c] transition-colors duration-300 shadow-lg text-white font-semibold tracking-wide text-sm sm:text-base z-30"
      >
        Discover More
      </motion.button>

      {/* Extra Buttons Row */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2.2, duration: 0.8 }}
  className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 z-30 items-center justify-center"
>

        {/* Watch on YouTube */}
        <a
  href="https://youtube.com/@memorysl?si=zWSUo0Sh7UdSsWWi"
  target="_blank"
  rel="noreferrer"
  className="
    group flex items-center gap-3
    px-6 py-3
    rounded-full
    bg-white/5 backdrop-blur-md
    border border-white/10
    hover:border-red-500/40
    transition-all duration-300
    hover:-translate-y-1
    shadow-lg hover:shadow-red-500/20
    text-sm sm:text-base
  "
>
  <FaYoutube
    size={20}
    className="text-red-500 group-hover:scale-110 transition"
  />
  <span className="text-white font-medium">
    Watch on YouTube
  </span>
</a>


        {/* WhatsApp */}
        <a
  href="https://wa.me/94773709076"
  target="_blank"
  rel="noreferrer"
  className="
    group flex items-center gap-3
    px-7 py-3
    rounded-full
    bg-white/5 backdrop-blur-md
    border border-[#075e54]/40
    backdrop-blur-md
    hover:bg-[#d4a373]/20
    transition-all duration-300
    hover:-translate-y-1
    shadow-xl hover:shadow-[#075e54]/30
    text-sm sm:text-base
  "
>
  <SiWhatsapp
    size={20}
    className="text-[#d4a373] group-hover:scale-110 transition"
  />
  <span className="text-white font-semibold tracking-wide">
    Book Now
  </span>
</a>


        {/* Facebook Reels */}
        <a
  href="https://www.facebook.com/share/1FDKMjXg4q/?mibextid=wwXIfr"
  target="_blank"
  rel="noreferrer"
  className="
    group flex items-center gap-3
    px-6 py-3
    rounded-full
    bg-white/5 backdrop-blur-md
    border border-white/10
    hover:border-blue-500/40
    transition-all duration-300
    hover:-translate-y-1
    shadow-lg hover:shadow-blue-500/20
    text-sm sm:text-base
  "
>
  <FaFacebookF
    size={18}
    className="text-blue-500 group-hover:scale-110 transition"
  />
  <span className="text-white font-medium">
    Watch Reels
  </span>
</a>

      </motion.div>



      
    </section>
  );
}
