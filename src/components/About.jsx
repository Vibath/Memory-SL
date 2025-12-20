import { motion } from "framer-motion";
import aboutPhoto from "../images/about-photo.png"; // replace with your actual image path

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 text-white"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <h2 className="text-4xl font-bold mb-6 text-[#d4a373]">About Memory SL</h2>
        <p className="text-zinc-300 text-lg leading-relaxed">
          Memory SL is Sri Lanka’s premier wedding and live music band,
          based in Kandy. We specialize in creating unforgettable moments
          through soulful music, energetic performances, and a passion
          that connects with every audience. Whether it’s weddings, concerts,
          corporate events, or private parties, Memory SL brings the perfect
          vibe to your special day.
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <img
          src={aboutPhoto}
          alt="Memory SL band performance"
          className="rounded-lg shadow-lg object-cover w-full max-h-[400px]"
        />
      </motion.div>
    </section>
  );
}
