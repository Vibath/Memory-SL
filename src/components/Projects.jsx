import { motion } from "framer-motion";
import memoryLossImage from "../images/memoryloss.png";
import memoryStreetThumb from "../images/memory-street-thumb.jpg";

const projects = [
  {
    title: "Memory On Street",
    subtitle: "Street Concert Series",
    description:
      "Memory On Street is a signature street pocket concert series fully organized by us. It’s completely free and open to anyone. Minimal setup, pure vibe — successfully held in Sahas Uyana Kandy, Prison Park, Kurunegala Lake Round, Ampara Town, and Gampola Town.",
    image: memoryStreetThumb,
    youtubeUrl: "https://www.youtube.com/playlist?list=PLGgsGb_Vk31g78mNqoQqgto-ompf3rnpJ",
  },
  {
    title: "MemoryLoss Episodes",
    subtitle: "Short-Form Covers",
    description:
      "A fast-paced, high-quality video series of one-minute covers featuring unique visual aesthetics and tight studio production. Created exclusively for Reels and TikTok to deliver our signature sound in bite-sized, cinematic episodes.",
    image: memoryLossImage,
    youtubeUrl: "https://www.facebook.com/profile.php?id=100086293732608",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 right-0 w-full md:w-[800px] h-[600px] bg-gradient-to-l from-[#d4a373]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-8 h-[2px] bg-[#d4a373]" />
            <span className="font-['Montserrat',sans-serif] text-[#d4a373] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
              Digital & Live
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
            Original <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Productions.</span>
          </motion.h2>
        </div>

        {/* Projects Feed */}
        <div className="flex flex-col space-y-24 md:space-y-32">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col gap-10 md:gap-16 lg:gap-20 items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                
                {/* Image / Video Thumbnail Block */}
                <a 
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-1/2 relative group block"
                >
                  <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5 bg-zinc-900 cursor-pointer">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                    
                    {/* Cinematic Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:border-[#d4a373]/50 transition-all duration-500 shadow-xl">
                        {/* Play Icon */}
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-[#d4a373] transition-colors ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Text Block */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h4 className="font-['Montserrat',sans-serif] text-[#d4a373] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                    {project.subtitle}
                  </h4>
                  
                  <h3 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
                    {project.title}
                  </h3>
                  
                  <p className="font-['Montserrat',sans-serif] text-gray-400 font-light text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                    {project.description}
                  </p>
                  
                  {/* Sleek Animated Link */}
                  <div>
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 font-['Montserrat',sans-serif] text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white transition-colors duration-500 hover:text-[#d4a373] pb-2"
                    >
                      <svg className="w-4 h-4 text-white/50 group-hover:text-[#d4a373] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                      Watch Now
                      {/* Hover Line */}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d4a373] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}