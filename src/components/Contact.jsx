import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import memoryLogo from "../images/logo.png";
import soundgearLogo from "../images/soundgear-logo.png";

export default function Contact() {
  return (
    <footer id="contact" className="relative w-full bg-[#050505] text-white pt-24 pb-8 overflow-hidden border-t border-white/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#d4a373]/10 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* GIANT BACKGROUND TEXT WATERMARK */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-['Outfit',sans-serif] text-[28vw] md:text-[21vw] font-black text-white/[0.02] tracking-tighter leading-none">
          MEMORY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Eyebrow & Main CTA Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-[#d4a373]" />
            <span className="font-['Montserrat',sans-serif] text-[#d4a373] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
              Get in Touch
            </span>
            <div className="w-8 h-[2px] bg-[#d4a373]" />
          </div>
          <h2 className="font-['Outfit',sans-serif] text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#e6c9a5]">Memory.</span>
          </h2>
        </div>

        {/* Two-Column Grid: Mirrored Alignment */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 mb-24">
          
          {/* THE ABSOLUTE CENTER LINE (Desktop Only) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10 -translate-x-1/2" />
          
          {/* =======================
              COLUMN 1: MEMORY SL (Aligns Right on Desktop)
              ======================= */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right md:pr-16 lg:pr-24">
            <img src={memoryLogo} alt="Memory SL Logo" className="h-12 md:h-16 object-contain mb-6 opacity-90" />
            
            <a
              href="https://wa.me/94773709076"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center md:flex-row-reverse gap-3 px-6 py-3 font-['Montserrat',sans-serif] text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white overflow-hidden border border-white/20 transition-all duration-700 hover:border-[#25D366]/50 hover:bg-[#25D366]/5 mb-8"
            >
              <SiWhatsapp size={16} className="text-[#25D366] group-hover:scale-110 transition-transform duration-500" />
              <span className="relative z-10 block transition-colors duration-500 ease-out group-hover:text-white">
                Message Band
              </span>
            </a>

            <div className="flex flex-col items-center md:items-end gap-4 font-['Montserrat',sans-serif] text-xs sm:text-sm text-gray-400 font-light tracking-wide">
              <a href="https://www.facebook.com/share/1FDKMjXg4q/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center md:flex-row-reverse gap-4 hover:text-[#d4a373] transition-colors duration-300">
                <FaFacebookF size={18} />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/memory.sl?igsh=bmVuaDNsMWlwNGht" target="_blank" rel="noreferrer" className="flex items-center md:flex-row-reverse gap-4 hover:text-[#d4a373] transition-colors duration-300">
                <FaInstagram size={18} />
                <span>Instagram</span>
              </a>
              <a href="https://youtube.com/@memorysl?si=zWSUo0Sh7UdSsWWi" target="_blank" rel="noreferrer" className="flex items-center md:flex-row-reverse gap-4 hover:text-[#d4a373] transition-colors duration-300">
                <FaYoutube size={18} />
                <span>YouTube</span>
              </a>
              <a href="https://www.tiktok.com/@memoryslmusic?_t=ZS-8yd5QxY9RPV&_r=1" target="_blank" rel="noreferrer" className="flex items-center md:flex-row-reverse gap-4 hover:text-[#d4a373] transition-colors duration-300">
                <FaTiktok size={18} />
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* =======================
              COLUMN 2: SOUNDGEAR (Aligns Left on Desktop)
              ======================= */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:pl-16 lg:pl-24">
            <img src={soundgearLogo} alt="Soundgear Logo" className="h-14 md:h-16 object-contain mb-6 opacity-90" />
            
            <a
              href="https://wa.me/94706642049"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 px-6 py-3 font-['Montserrat',sans-serif] text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white overflow-hidden border border-white/20 transition-all duration-700 hover:border-[#25D366]/50 hover:bg-[#25D366]/5 mb-8"
            >
              <SiWhatsapp size={16} className="text-[#25D366] group-hover:scale-110 transition-transform duration-500" />
              <span className="relative z-10 block transition-colors duration-500 ease-out group-hover:text-white">
                Message Soundgear
              </span>
            </a>

            <div className="flex flex-col items-center md:items-start gap-4 font-['Montserrat',sans-serif] text-xs sm:text-sm text-gray-400 font-light tracking-wide">
              <a href="https://www.facebook.com/share/17KXnSHYg8/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-[#d4a373] transition-colors duration-300">
                <FaFacebookF size={18} />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/memorysoundgear?igsh=MTJtbWl5aW9ybGMxMA==" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-[#d4a373] transition-colors duration-300">
                <FaInstagram size={18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Media Kit Download Banner */}
        <div className="flex justify-center mb-24">
          <a
            href="https://drive.google.com/drive/folders/1zNLYVuxrW-a1Rb_CICq1DZUgPOHkNCyp?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 font-['Montserrat',sans-serif] text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white overflow-hidden border border-[#d4a373]/30 transition-all duration-700 hover:border-[#d4a373] hover:bg-[#d4a373]/10"
          >
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 ease-out group-hover:text-white">
              Download Media Kit
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </span>
          </a>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 font-['Montserrat',sans-serif] text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Memory SL. All rights reserved.
          </p>
          
          <a 
            href="https://www.dollyva.com" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            Powered by <span className="font-bold text-gray-300">Dollyva</span>
          </a>
        </div>

      </div>
    </footer>
  );
}