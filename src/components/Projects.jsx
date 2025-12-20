import { motion } from "framer-motion";
import memoryLossImage from "../images/memoryloss.png";
import memoryStreetThumb from "../images/memory-street-thumb.jpg";

const projects = [
  {
    title: "Memory On Street",
    description:
      "Memory On Street is a street pocket concert series that we organized. It’s fully free and anyone can join. Minimal setup, pure vibe — held in Sahas Uyana, Kandy; Prison Park; Kurunegala Lake Round; Ampara Town; and Gampola Town.",
    image: memoryStreetThumb,
    youtubeUrl: "https://www.youtube.com/playlist?list=PLGgsGb_Vk31g78mNqoQqgto-ompf3rnpJ",
  },
  {
    title: "MemoryLoss Episodes",
    description:
      "MemoryLoss Episodes is a short-form video series of one-minute covers with unique visuals and tight production. Created specially for Reels & TikTok vibes.",
    image: memoryLossImage,
    youtubeUrl: "https://youtube.com/shorts/b2Z1jSUhYCE?si=K6Mci5D1ZDor355b",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#d4a373] mb-12 text-center">
          Our Projects
        </h2>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              {/* Description */}
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#d4a373]">
                  {project.title}
                </h3>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-6 py-2 bg-[#8b5e3c] hover:bg-[#a27c5c] text-white rounded-full shadow-md transition"
                >
                  Watch on YouTube
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
