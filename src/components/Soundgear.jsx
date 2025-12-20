import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import soundgearLogo from "../images/soundgear-logo.png"; // Your unique logo
import soundgearPhoto from "../images/soundgear-main.jpg"; // Main visual
import jbl from "../images/jbl.jpg";
import tf5 from "../images/yamaha-tf5.jpg";
import pdp from "../images/pdp-drum.jpg";
import lights from "../images/lights.jpg";


const gearList = [
    {
      name: "JBL VRX900 PA System",
      image: jbl,
      description:
        "Premium JBL VRX900 line array system — delivers crisp, immersive sound coverage perfect for large weddings, concerts, and corporate events.",
    },
    {
      name: "Yamaha TF5 Digital Mixer",
      image: tf5,
      description:
        "Next-gen mixing console with precise EQ and FX for any genre. Clean, intuitive touch interface for seamless control.",
    },
    {
      name: "PDP MX Series Drum Kit",
      image: pdp,
      description:
        "A versatile 5-piece drum kit from PDP. Known for punchy toms and deep snare impact — loved by pro drummers.",
    },
    {
      name: "Other Essentials",
      image: lights, // Or you can use a custom combined image
      description: (
        <>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
            <li>
              <strong>High Quality Amplifiers:</strong> Reliable output with zero distortion.
            </li>
            <li>
              <strong>Guitar Amplifiers:</strong> Custom heads for both rhythm and lead tones.
            </li>
            <li>
              <strong>Lighting System (13R Beam Lights):</strong> Intelligent beams that move with the music.
            </li>
            <li>
              <strong>Stands & Accessories:</strong> Mic, speaker, guitar & keyboard stands — everything needed to stay stage-ready.
            </li>
          </ul>
        </>
      ),
    },
  ];
  

export default function Soundgear() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="soundgear" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <img
            src={soundgearLogo}
            alt="Soundgear Logo"
            className="mx-auto h-[102px] mb-4"
          />
          <h2 className="text-4xl font-bold text-[#d4a373] mb-4">Memory SoundGear</h2>
          <p className="text-zinc-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Soundgear is the heartbeat of our band’s audio experience. Available island-wide, it’s the full professional sound setup we trust for every performance — from luxury weddings to massive outdoor concerts. Featuring the JBL VRX PA system, Yamaha digital mixing consoles, and high-end accessories, Soundgear ensures every beat hits with clarity and power.
          </p>
        </div>

        {/* Main Photo + Button */}
        <div className="flex flex-col items-center gap-6">
          <img
            src={soundgearPhoto}
            alt="Soundgear Setup"
            className="rounded-xl shadow-2xl max-w-full w-full md:w-[80%]"
          />

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 px-8 py-3 rounded-full bg-[#8b5e3c] hover:bg-[#a27c5c] text-white shadow-md transition"
          >
            {expanded ? "Close Details" : "Learn More"}
          </button>
        </div>

        {/* Expanded Gear List */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {gearList.map((gear) => (
                <motion.div
                  key={gear.name}
                  whileHover={{ scale: 1.03 }}
                  className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-zinc-800"
                >
                  <img
                    src={gear.image}
                    alt={gear.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[#d4a373] mb-2">{gear.name}</h3>
                    <p className="text-zinc-300 text-sm">{gear.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
