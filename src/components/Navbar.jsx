import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const menuRef = useRef();

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
  
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
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/70 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2">
            <img src={logo} alt="Memory SL Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={clsx(
                  "transition text-sm tracking-wide",
                  active === link.href
                    ? "text-[#d4a373] font-semibold"
                    : "text-zinc-300 hover:text-[#d4a373]"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-zinc-300"
            aria-label={open ? "Close Menu" : "Open Menu"}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Overlay and Sidebar - Outside navbar, above everything */}
      <AnimatePresence>
        {open && (
          <>
            {/* Fullscreen overlay with blur and dark background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-[70]"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-zinc-1000 shadow-xl z-[80] flex flex-col p-6 md:hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="self-end text-zinc-300 hover:text-white"
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-5 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "text-lg tracking-wide border-b pb-2 transition",
                      active === link.href
                        ? "text-[#d4a373] font-medium"
                        : "text-zinc-200 hover:text-[#d4a373]"
                    )}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
