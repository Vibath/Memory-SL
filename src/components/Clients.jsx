import { motion } from "framer-motion";

// Client Logos
import Citadel from "../images/clients/citadel.jpeg";
import EarlsRegency from "../images/clients/earls-regency.png"; // Added
import Daraz from "../images/clients/daraz.png";
import Mas from "../images/clients/mas.png";
import Victoria from "../images/clients/victoria.png";
import Randles from "../images/clients/randles.jpg";
import FabCeylon from "../images/clients/fab-ceylon.png";
import PortView from "../images/clients/port-view.png"; 
import Joint from "../images/clients/joint.png";
import Covalent from "../images/clients/covalent.jpeg"; // Added

const clients = [
  { name: "Cinnamon Citadel", logo: Citadel },
  { name: "Earl's Regency", logo: EarlsRegency },
  { name: "Daraz", logo: Daraz },
  { name: "MAS Holdings", logo: Mas },
  { name: "Victoria Golf Resort", logo: Victoria },
  { name: "Randles Pavillion", logo: Randles },
  { name: "Fab Ceylon", logo: FabCeylon },
  { name: "Port View Restaurant", logo: PortView },
  { name: "The Joint Pub", logo: Joint },
  { name: "Covalent Systems", logo: Covalent },
];

export default function Clients() {
  return (
    <section className="relative w-full bg-[#050505] py-20 md:py-28 overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#d4a373]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-8 h-[2px] bg-[#d4a373]" />
            <span className="font-['Montserrat',sans-serif] text-[#d4a373] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
              Our Network
            </span>
            <div className="w-8 h-[2px] bg-[#d4a373]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#e6c9a5]">By.</span>
          </motion.h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 md:gap-y-16 justify-items-center items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group flex flex-col items-center gap-4 w-full cursor-default"
            >
              {/* Logo Wrapper */}
              <div className="h-12 md:h-16 flex items-center justify-center w-full">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain  opacity-80 transition-all duration-500 ease-out md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-110"
                />
              </div>
              
              {/* Subtle Text below logo */}
              <span className="font-['Montserrat',sans-serif] text-[10px] md:text-xs text-gray-500 tracking-wider uppercase transition-colors duration-500 md:group-hover:text-white text-center">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}