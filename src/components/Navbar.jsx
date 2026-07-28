"use client";

import { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Members", href: "#members" },
  { name: "Events", href: "#events" },
  { name: "Packages", href: "#wedding-packages" },
  { name: "Projects", href: "#projects" },
  { name: "Soundgear", href: "#soundgear" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  
  const lastScrollY = useRef(0);

  // --- THE SMART SCROLL & SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Shrink padding if we've scrolled past 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Hide on scroll down, Show on scroll up (Ignore if menu is open)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !isMenuOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;

      // 3. Scroll Spy (Update active link based on scroll position)
      const scrollPos = currentScrollY + window.innerHeight / 2;
      for (let i = 0; i < navLinks.length; i++) {
        const section = document.querySelector(navLinks[i].href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(navLinks[i].href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenuOpen]);

  // Smooth scroll handler for menu links
  const handleNavClick = (e, targetHref) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu first
    
    // Wait for menu close animation to finish before scrolling
    setTimeout(() => {
      if (targetHref === "#home" || targetHref === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(targetHref);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 400); 
  };

  return (
    <>
      {/* --- THE HEADER --- */}
      <header 
        className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
          ${isScrolled ? "py-4 px-6 md:px-12 bg-black/50 backdrop-blur-md border-b border-white/5" : "py-8 px-6 md:px-12"} 
          ${isHidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        
        {/* Logo */}
        <div 
          className={`pointer-events-auto cursor-pointer transition-all duration-500 ${!isMenuOpen && !isScrolled ? 'mix-blend-difference' : ''}`}
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <img 
            src={logo} 
            alt="Memory SL" 
            className="h-8 md:h-10 w-auto object-contain" 
          />
        </div>

        {/* Middle Status (Fades out when scrolled or menu open) */}
        <div 
          className={`hidden md:flex flex-col items-center justify-center text-white/50 text-[10px] uppercase tracking-[0.3em] font-['Montserrat',sans-serif] pointer-events-auto transition-opacity duration-500
            ${isScrolled || isMenuOpen ? "opacity-0" : "opacity-100 mix-blend-difference"}
          `}
        >
          <span>Where Memories Come Alive</span>
          <span className="w-1 h-1 bg-[#d4a373] rounded-full mt-1 animate-pulse"></span>
        </div>

        {/* Animated Menu Trigger */}
        <button 
          className={`pointer-events-auto flex items-center gap-4 group transition-colors duration-500 ${!isMenuOpen && !isScrolled ? 'mix-blend-difference' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-white text-xs uppercase tracking-widest font-['Montserrat',sans-serif] font-medium group-hover:text-[#d4a373] transition-colors hidden sm:block">
            {isMenuOpen ? "Close" : "Menu"}
          </span>
          
          {/* Animated Hamburger / X Icon */}
          <div className="relative flex flex-col justify-center w-8 h-8">
            <span className={`absolute h-[2px] w-full bg-white transition-all duration-500 ease-out group-hover:bg-[#d4a373] ${isMenuOpen ? "rotate-45" : "-translate-y-1.5 group-hover:scale-x-75 origin-right"}`}></span>
            <span className={`absolute h-[2px] w-full bg-white transition-all duration-500 ease-out group-hover:bg-[#d4a373] ${isMenuOpen ? "-rotate-45" : "translate-y-1.5 group-hover:scale-x-50 origin-right"}`}></span>
          </div>
        </button>

      </header>

      {/* --- THE FULL-SCREEN MENU OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#050505] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {/* Background Aesthetic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a373]/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        {/* Menu Links - Upgraded to a 2-column grid on Desktop */}
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-8 gap-x-20 lg:gap-x-32 relative z-10 w-full max-w-5xl px-8">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group relative overflow-hidden flex justify-center md:justify-start"
            >
              {/* Menu Text */}
              <span 
                className={clsx(
                  "block font-['Outfit',sans-serif] font-black text-3xl md:text-5xl lg:text-6xl transition-all duration-700 ease-out uppercase tracking-tight",
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
                  active === item.href ? "text-[#d4a373]" : "text-white group-hover:text-white/80"
                )}
                style={{ transitionDelay: `${index * 50}ms` }} // Staggered delay
              >
                {item.name}
              </span>
              
              {/* Gold Hover Line */}
              <span className="absolute bottom-0 left-1/2 md:left-0 w-0 h-[2px] bg-[#d4a373] transition-all duration-500 group-hover:w-full group-hover:left-0 ease-out opacity-80" />
            </a>
          ))}
        </nav>

        {/* Menu Footer (Socials & Contact) */}
        <div 
          className={`absolute bottom-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-12 transition-all duration-700 delay-500
            ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
        >
          <a href="https://youtube.com/@MemorySL" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#d4a373] font-['Montserrat',sans-serif] text-[10px] tracking-[0.2em] uppercase transition-colors">
            YouTube
          </a>
          <a href="https://www.facebook.com/profile.php?id=100086293732608" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#d4a373] font-['Montserrat',sans-serif] text-[10px] tracking-[0.2em] uppercase transition-colors">
            Facebook
          </a>
          <a href="https://wa.me/94773709076" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#d4a373] font-['Montserrat',sans-serif] text-[10px] tracking-[0.2em] uppercase transition-colors">
            WhatsApp
          </a>
        </div>

      </div>
    </>
  );
}