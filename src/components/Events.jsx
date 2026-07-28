import { motion } from "framer-motion";
import weddingImg from '../images/wedding.jpg';
import concertImg from '../images/concert.jpg';
import nyeImg from '../images/nye.jpg';
import corporateImg from '../images/corporate.JPG';

const events = [
  {
    id: "01",
    title: "Weddings",
    subtitle: "The Perfect Soundtrack",
    description:
      "One of the most successful wedding bands in Kandy, Memory SL has built a highly trusted client base extending across Colombo, Kurunegala, Kegalle, and the Southern region. With a perfect blend of emotion, high energy, and pure elegance, we turn your special day into an unforgettable celebration filled with joy and lifelong memories.",
    image: weddingImg,
  },
  {
    id: "02",
    title: "Concerts & Festivals",
    subtitle: "High-Voltage Arenas",
    description:
      "From massive outdoor stages to intimate indoor venues, Memory SL delivers high-octane live performances that captivate audiences. We have powered major festivals, food fairs, and large-scale concerts with electrifying sets that keep the crowd engaged and moving from the very first beat to the final encore.",
    image: concertImg,
  },
  {
    id: "03",
    title: "Festive Galas & NYE",
    subtitle: "Iconic Celebrations",
    description:
      "Memory SL has become the signature sound for elite seasonal celebrations. For consecutive years (2024 and 2025), we have headlined the spectacular Christmas Eve and New Year’s Eve galas at the highly prestigious Cinnamon Citadel Kandy. We deliver premium, curated live entertainment that perfectly matches the grandeur and luxury of these iconic nights.",
    image: nyeImg,
  },
  {
    id: "04",
    title: "Corporate Events",
    subtitle: "Professional Excellence",
    description:
      "A trusted name in the corporate entertainment space, Memory SL frequently headlines annual galas and large-scale corporate events for leading brands, including Daraz and MAS Holdings. Our performances are meticulously tailored to reflect professionalism, corporate brand identity, and exceptional production value.",
    image: corporateImg,
  },
];

export default function Events() {
  return (
    <section id="events" className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-full h-[600px] bg-gradient-to-r from-[#d4a373]/5 via-transparent to-[#d4a373]/5 blur-[120px] pointer-events-none" />

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
              What We Do
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
            Experiences <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">We Create.</span>
          </motion.h2>
        </div>

        {/* Events Feed */}
        <div className="flex flex-col space-y-24 md:space-y-40">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-10 md:gap-16 lg:gap-24 items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                
                {/* Image Block */}
                <div className="w-full md:w-1/2 relative group">
                  {/* Decorative Number Behind Image (Desktop only) */}
                  <div className={`absolute -top-10 md:-top-16 ${isEven ? "-left-6 md:-left-12" : "-right-6 md:-right-12"} z-0 select-none opacity-20 hidden sm:block`}>
                    <span className="font-['Outfit',sans-serif] font-black text-8xl md:text-[10rem] text-transparent text-stroke-gold">
                      {event.id}
                    </span>
                  </div>

                  {/* The Image Container */}
                  <div className="relative z-10 w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5 bg-zinc-900">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Inner Shadow to blend the edges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Text Block */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  
                  {/* Mobile-only numerical indicator */}
                  <span className="font-['Outfit',sans-serif] font-black text-5xl text-white/10 mb-2 sm:hidden block">
                    {event.id}
                  </span>

                  <h4 className="font-['Montserrat',sans-serif] text-[#d4a373] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
                    {event.subtitle}
                  </h4>
                  
                  <h3 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
                    {event.title}
                  </h3>
                  
                  <p className="font-['Montserrat',sans-serif] text-gray-400 font-light text-sm sm:text-base leading-relaxed max-w-lg">
                    {event.description}
                  </p>
                  
                  {/* Small decorative line under text */}
                  <div className="w-12 h-[1px] bg-white/20 mt-8" />
                </div>

              </motion.div>
            );
          })}
        </div>
        
      </div>

      {/* Global Style for the text stroke effect used on the numbers */}
      <style dangerouslySetInnerHTML={{__html: `
        .text-stroke-gold {
          -webkit-text-stroke: 2px rgba(212, 163, 115, 0.3);
        }
      `}} />
    </section>
  );
}