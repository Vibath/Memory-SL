import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import pkg1 from "../images/packages/package1.jpg";
import pkg2 from "../images/packages/package2.jpg";
import pkg3 from "../images/packages/package3.jpg";
import pkg4 from "../images/packages/package4.jpg";

const packages = [pkg1, pkg2, pkg3, pkg4];

export default function WeddingPackages() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="wedding-packages"
      className="relative py-28 px-6 text-white overflow-hidden
      bg-gradient-to-b from-[#000] via-[#15100c] to-[#0b0705]"
    >
      {/* Soft romantic light */}
      {/* Animated romantic background glow */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  {/** Floating blobs **/}
  {[...Array(5)].map((_, i) => (
    <motion.div
      key={i}
      className={`absolute w-[${200 + i * 80}px] h-[${200 + i * 80}px] 
        rounded-full`}
      style={{
        background: `rgba(212,163,115,${0.1 + i * 0.05})`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        filter: "blur(140px)",
      }}
      animate={{
        y: [0, -30 - i * 10, 0],
        x: [0, 20 + i * 10, 0],
        scale: [1, 1.05 + i * 0.02, 1],
        rotate: [0, 20, 0],
        opacity: [0.3 + i * 0.1, 0.6 + i * 0.05, 0.3 + i * 0.1],
      }}
      transition={{
        duration: 18 + i * 4,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
        delay: i * 2,
      }}
    />
  ))}
</div>



      <div className="relative max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl
          font-['Playfair_Display'] font-bold
          text-[#e6c9a5] tracking-wide"
        >
          Celebrate Your Special Day With Us
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 max-w-2xl mx-auto text-[#d6d3d1] text-lg leading-relaxed"
        >
          Our wedding packages are thoughtfully curated to match your love story —
          from intimate ceremonies to grand celebrations, brought to life with
          soulful live music and timeless elegance.
        </motion.p>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setOpen(!open)}
          className="mt-12 px-12 py-3 rounded-full
          bg-gradient-to-r from-[#b89068] to-[#d4a373]
          hover:from-[#d4a373] hover:to-[#e6c9a5]
          transition shadow-[0_10px_40px_rgba(212,163,115,0.35)]
          text-black font-semibold tracking-wide"
        >
          {open ? "See Less Packages" : "View Wedding Packages"}
        </motion.button>
      </div>

      {/* Packages Grid */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.9 }}
            className="relative max-w-7xl mx-auto mt-24
            grid grid-cols-1 sm:grid-cols-2 gap-12 px-4"
          >
            {packages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.04 }}
                className="relative rounded-3xl overflow-hidden
                shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                group"
              >
                <img
                  src={img}
                  alt={`Wedding Package ${index + 1}`}
                  className="w-full h-full object-cover
                  transition duration-700 group-hover:scale-105"
                />

                {/* Elegant overlay */}
                <div className="absolute inset-0
                bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Gold frame */}
                <div className="absolute inset-0 rounded-3xl
                ring-1 ring-[#e6c9a5]/30
                group-hover:ring-[#e6c9a5]/70 transition" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
