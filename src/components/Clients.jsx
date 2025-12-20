import { motion } from "framer-motion";

// Client Logos
import Citadel from "../images/clients/citadel.jpeg";
import Daraz from "../images/clients/daraz.png";
import FabCeylon from "../images/clients/fab-ceylon.png";
import PortView from "../images/clients/port-view.png"; 
import Joint from "../images/clients/joint.png";
import Mas from "../images/clients/mas.png";
import Otsc from "../images/clients/otsc.jpg";
import Randles from "../images/clients/randles.jpg";
import Victoria from "../images/clients/victoria.png";
import DrReddys from "../images/clients/dr-reddys.png";


const clients = [
  { name: "Cinnamon Citadel", logo: Citadel },
  { name: "Daraz", logo: Daraz },
  { name: "MAS Holdings", logo: Mas },
  { name: "Victoria Golf Club", logo: Victoria },
  { name: "OTSC", logo: Otsc },
  { name: "Randles Pavillion", logo: Randles },
  { name: "Fab Ceylon", logo: FabCeylon },
  { name: "Port View Restaurant", logo: PortView },
  { name: "The Joint Pub", logo: Joint },
  { name: "Dr.Reddy's", logo: DrReddys },
];

export default function Clients() {
  return (
    <section className="py-28 bg-gray-950/70 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold tracking-widest text-center mb-14"
        >
          <span className="text-gray-300">Trusted By</span>
        </motion.h3>

        {/* Clients */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group flex flex-col items-center gap-2 cursor-default"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-14 md:h-16 w-auto object-contain transition-all duration-300
                   group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              />
              <span
                className="text-sm md:text-base text-gray-400 transition-colors duration-300
                   group-hover:text-white text-center"
              >
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
