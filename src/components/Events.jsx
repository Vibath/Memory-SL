import { motion } from "framer-motion";
import weddingImg from '../images/wedding.jpg';
import concertImg from '../images/concert.jpg';
import nyeImg from '../images/nye.jpg';
import corporateImg from '../images/corporate.jpg';

const events = [
  {
    title: "Weddings",
    description:
      "One of the most successful wedding bands in Kandy, Memory SL has also built a strong and trusted client base across Colombo, Kurunegala, Kegalle, and the Southern region. With a perfect blend of emotion, energy, and elegance, we turn your special day into an unforgettable celebration filled with music, joy, and lifelong memories.",
    image: weddingImg,
  },
  {
    title: "Concerts",
    description:
      "From massive outdoor stages to intimate indoor venues, Memory SL delivers high-energy live performances that captivate audiences. We have powered festivals, food fairs, and large-scale concerts with electrifying sets that keep the crowd engaged from the first beat to the final encore.",
    image: concertImg,
  },
  {
    title: "NYE / Christmas Eve",
    description:
      "Memory SL successfully performed for Christmas Eve celebrations in 2024 at one of Sri Lanka’s most trusted hotel chains, Cinnamon Hotels & Resorts, at Cinnamon Citadel Kandy. Following the success of that event, the band is set to make its second appearance for Christmas Eve and New Year’s Eve celebrations in 2025, delivering premium live entertainment for these iconic nights.",
    image: nyeImg,
  },
  {
    title: "Corporate Events",
    description:
      "A trusted name in the corporate entertainment space, Memory SL has successfully concluded annual and large-scale corporate events for leading brands including Daraz and MAS Holdings on multiple occasions. Our performances are tailored to reflect professionalism, brand identity, and high production value.",
    image: corporateImg,
  },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2 },
  }),
};

export default function Events() {
  return (
    <section id="events" className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold text-[#d4a373] mb-16 text-center"
      >
        Our Events
      </motion.h2>

      <div className="flex flex-col space-y-28">
        {events.map(({ title, description, image }, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Block */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="md:w-1/2 w-full overflow-hidden rounded-lg shadow-xl"
              >
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-64 md:h-80 transition duration-300 hover:brightness-110"
                />
              </motion.div>

              {/* Text Block */}
              <div className="md:w-1/2 w-full text-white">
                <h3 className="text-3xl font-semibold mb-4">{title}</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">{description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
