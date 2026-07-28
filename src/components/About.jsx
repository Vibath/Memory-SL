import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#050505] overflow-hidden py-24 md:py-32"
    >
      {/* 1. Cinematic Ambient Background & Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a373]/[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="font-['Outfit',sans-serif] font-black text-[15rem] md:text-[25rem] text-white whitespace-nowrap leading-none tracking-tighter">
          MEMORY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* 2. Top Section: Split Editorial Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          
          {/* Left Side: Eyebrow & Huge Title */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#d4a373]" />
              <span className="font-['Montserrat',sans-serif] text-[#d4a373] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                The Legacy
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Outfit',sans-serif] text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase leading-[0.95] tracking-tight"
            >
              Elevating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
                Every <br className="hidden lg:block" /> Moment.
              </span>
            </motion.h2>
          </div>

          {/* Right Side: Description */}
          <div className="w-full lg:w-7/12 flex flex-col justify-end lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-['Montserrat',sans-serif] text-gray-400 font-light text-sm sm:text-base md:text-lg leading-relaxed space-y-6 max-w-2xl"
            >
              <p>
                Memory SL is Sri Lanka’s premier live music band. We specialize in creating unforgettable moments through soulful music, high-end energetic performances, and a passion that intimately connects with every audience.
              </p>
              <p>
                Whether it’s an elegant wedding reception, a massive corporate event, or an exclusive private party, we curate the perfect symphony of sound and style to bring your special day to life. Our commitment is to deliver an experience that resonates long after the final note is played.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 3. Bottom Section: Full-Width Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 md:mt-32 w-full grid grid-cols-1 sm:grid-cols-3 border-t border-b border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
        >
          {/* Stat 1 */}
          <div className="flex flex-col items-center sm:items-start py-8 sm:py-10 sm:pr-10 text-center sm:text-left hover:bg-white/[0.02] transition-colors duration-500 cursor-default px-4 sm:px-0">
            <p className="font-['Outfit',sans-serif] text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">100<span className="text-[#d4a373]">%</span></p>
            <p className="font-['Montserrat',sans-serif] text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] font-medium">Live Music</p>
          </div>
          
          {/* Stat 2 */}
          <div className="flex flex-col items-center sm:items-start py-8 sm:py-10 sm:px-10 text-center sm:text-left hover:bg-white/[0.02] transition-colors duration-500 cursor-default px-4">
            <p className="font-['Outfit',sans-serif] text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">Top</p>
            <p className="font-['Montserrat',sans-serif] text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] font-medium">Performers</p>
          </div>
          
          {/* Stat 3 */}
          <div className="flex flex-col items-center sm:items-start py-8 sm:py-10 sm:pl-10 text-center sm:text-left hover:bg-white/[0.02] transition-colors duration-500 cursor-default px-4 sm:px-0">
            <p className="font-['Outfit',sans-serif] text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">Pure</p>
            <p className="font-['Montserrat',sans-serif] text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] font-medium">Energy</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}