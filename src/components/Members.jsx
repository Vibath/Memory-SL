import { useState } from "react";
import sachith from "../images/sachith.jpg";
import sachithra from "../images/sachithra.jpg";
import kalum from "../images/kalum.jpg";
import lahiru from "../images/lahiru.jpg";
import anupama from "../images/anupama.jpg";
import rukshan from "../images/rukshan.jpg";
import bucky from "../images/bucky.jpg";

const members = [
  {
    name: "Sachith",
    role: "Frontman",
    image: sachith,
    description:
      "Sachith is the iconic voice and soul of Memory SL. As the frontman and a contestant of *The Voice Sri Lanka*, he brings a unique blend of emotional depth and high-voltage performance to the stage. Known for his ability to masterfully deliver any genre — from ballads to rock — Sachith's stage presence captivates audiences and sets the tone for every show.",
  },
  {
    name: "Sachithra",
    role: "Keyboardist & Music Producer",
    image: sachithra,
    description:
      "The musical architect behind the scenes, Sachithra is not only the band’s keyboardist but also its music producer and playback engineer. With a deep love for synths and electronic textures, he crafts the rich, layered sound that defines Memory SL. His creativity brings both innovation and emotion to the band’s arrangements.",
  },
  {
    name: "Kalum",
    role: "Bassist",
    image: kalum,
    description:
      "Kalum is the groove engine of Memory SL. With smooth yet punchy basslines, he anchors the band’s rhythm section with precision and soul. Whether it's a laid-back groove or a high-energy anthem, his playing brings weight and depth to every song, always locking in perfectly with the drums.",
  },
  {
    name: "Lahiru",
    role: "Drummer",
    image: lahiru,
    description:
      "Lahiru is the heartbeat of the band — a powerful and energetic drummer known for his tight timing and explosive fills. His heavy-hitting style and commanding stage presence electrify the crowd and drive the band's energy from start to finish. Every beat he plays fuels the live experience.",
  },
  {
    name: "Anupama",
    role: "Guitarist",
    image: anupama,
    description:
      "Anupama brings a unique flair to every performance with his expressive guitar work. He’s known for his improvisational skill and musical sensitivity, effortlessly weaving between soulful licks and powerful solos. His tone and touch add a signature voice to Memory SL’s live sound.",
  },
  {
    name: "Rukshan",
    role: "Guitarist",
    image: rukshan,
    description:
      "The newest addition to Memory SL, Rukshan delivers crisp, clean guitar parts that add clarity and punch to the band’s arrangements. A rising talent, he brings fresh energy and a modern edge to the stage while fitting seamlessly into the band's sound.",
  },
  {
    name: "Bucky",
    role: "Band Manager",
    image: bucky,
    description:
      "The strategic force behind Memory SL. From event coordination to client communication, Bucky manages the business side of the band with precision and professionalism. His vision, planning, and execution play a vital role in shaping the band’s growth and reputation across Sri Lanka."
  }
  
];


export default function BandMembers() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section id="members" className="bg-zinc-950 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#d4a373] mb-16 text-center tracking-widest">
          Meet the Band
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="relative w-[280px] h-[360px] perspective cursor-pointer card-hover-glow"
              onClick={() => setFlippedIndex(index === flippedIndex ? null : index)}
            >
              <div
                className={`relative w-full h-full card-3d transition-transform duration-700 ${
                  flippedIndex === index ? "card-flip" : ""
                }`}
              >
                {/* Front */}
                <div className="card-front bg-zinc-900 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4">
                    <h3 className="text-2xl font-extrabold text-white drop-shadow-md font-['Poppins'] bg-gradient-to-r from-[#d4a373] to-white bg-clip-text text-transparent tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#d4a373] tracking-wide">
                      {member.role}
                    </p>
                  </div>
                  <div className="absolute top-2 right-2">
                    <p className="text-sm bg-[#d4a373]/80 px-3 py-1 rounded-full text-black font-semibold shadow-lg tap-info-anim">
                      Tap for Info
                    </p>
                  </div>
                </div>

                {/* Back */}
                <div className="card-back bg-zinc-900 rounded-xl p-5 flex flex-col justify-center items-center text-center shadow-2xl">
                  <h3 className="text-xl font-semibold text-[#d4a373] mb-2">
                    {member.name} — {member.role}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <p className="mt-4 text-xs text-zinc-500">(Tap to return)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
