import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 500px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[80] p-3 sm:p-4 rounded-full bg-[#050505]/70 backdrop-blur-md border border-white/10 text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-[#d4a373] hover:text-[#d4a373] group"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}