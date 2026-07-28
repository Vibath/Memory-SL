import { motion } from "framer-motion";

export default function WeddingPackages() {
  // Replace this with your actual Google Drive PDF link
  const driveLink = "https://drive.google.com/file/d/1gWfYzO7P9OO-q4dnfdFpwoZlMb_BrZeg/view?usp=drivesdk";

  return (
    <section
      id="wedding-packages"
      className="relative w-full bg-[#050505] py-24 md:py-32 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. Cinematic Ambient Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#d4a373]/10 blur-[100px] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 md:w-12 h-[2px] bg-[#d4a373]" />
          <span className="font-['Montserrat',sans-serif] text-[#d4a373] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
            Curated Offerings
          </span>
          <div className="w-8 md:w-12 h-[2px] bg-[#d4a373]" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Outfit',sans-serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6"
        >
          Tailored For Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            Special Day.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-['Montserrat',sans-serif] text-gray-400 font-light text-sm sm:text-base leading-relaxed max-w-xl mb-12"
        >
          Our wedding packages are thoughtfully curated to match your love story. From intimate ceremonies to grand celebrations, discover how we bring your vision to life with soulful live music and timeless elegance.
        </motion.p>

        {/* Redirect Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex px-8 py-4 sm:px-10 sm:py-5 font-['Montserrat',sans-serif] text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white overflow-hidden border border-white/20 transition-all duration-700 hover:border-[#d4a373]/60 hover:bg-[#d4a373]/5 bg-black/20 backdrop-blur-sm"
          >
            <span className="relative z-10 block transition-colors duration-500 ease-out group-hover:text-[#d4a373] flex items-center gap-3">
              View Wedding Packages
              {/* Subtle external link arrow icon */}
              <svg 
                className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
            {/* Animated Gold Bottom Line */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4a373] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}