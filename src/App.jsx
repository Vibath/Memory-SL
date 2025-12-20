import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/Events";
import WeddingPackages from "./components/WeddingPackages";
import Projects from "./components/Projects";
import Members from "./components/Members";
import Soundgear from "./components/Soundgear";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Members />
      <Events />
      <WeddingPackages />
      <Projects />
      <Soundgear />
      <Clients />
      <Contact />
      {/* Add other sections here later */}
    </div>
  );
}

export default App;
