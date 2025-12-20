import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import memoryLogo from "../images/logo.png";
import soundgearLogo from "../images/soundgear-logo.png";

export default function Contact() {
  return (
    <footer id="contact" className="bg-zinc-950 text-white py-16 px-6 mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* MEMORY SL */}
        <div className="space-y-4">
          <img src={memoryLogo} alt="Memory SL Logo" className="h-20 mb-4 drop-shadow-xl" />
          <h3 className="text-2xl font-bold text-[#d4a373] tracking-wider">Memory SL Band</h3>

          <div className="flex flex-col gap-4 mt-6">
            <a
              href="https://wa.me/94773709076"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#1f2937] hover:bg-[#374151] transition px-5 py-2 rounded-full w-max text-white font-semibold shadow"
            >
              <SiWhatsapp size={20} className="text-green-400" />
              Message on WhatsApp
            </a>

            <div className="space-y-4 mt-4">
              <a
                href="https://www.facebook.com/share/1FDKMjXg4q/?mibextid=wwXIfr"
                className="flex items-center gap-4 hover:translate-x-1 transition"
              >
                <FaFacebookF size={24} className="text-blue-500 drop-shadow-sm hover:drop-shadow" />
                <span>Follow us on Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/memory.sl?igsh=bmVuaDNsMWlwNGht"
                className="flex items-center gap-4 hover:translate-x-1 transition"
              >
                <FaInstagram size={24} className="text-pink-400 drop-shadow-sm hover:drop-shadow" />
                <span>Follow us on Instagram</span>
              </a>
              <a
                href="https://youtube.com/@memorysl?si=zWSUo0Sh7UdSsWWi"
                className="flex items-center gap-4 hover:translate-x-1 transition"
              >
                <FaYoutube size={24} className="text-red-500 drop-shadow-sm hover:drop-shadow" />
                <span>Watch on YouTube</span>
              </a>
              <a
                href="https://www.tiktok.com/@memoryslmusic?_t=ZS-8yd5QxY9RPV&_r=1"
                className="flex items-center gap-4 hover:translate-x-1 transition"
              >
                <FaTiktok size={24} className="text-white drop-shadow-sm hover:drop-shadow" />
                <span>Watch on TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* SOUNDGEAR */}
        <div className="space-y-4">
          <img src={soundgearLogo} alt="Soundgear Logo" className="h-20 mb-4 drop-shadow-xl" />
          <h3 className="text-2xl font-bold text-[#d4a373] tracking-wider">Soundgear</h3>

          <div className="flex flex-col gap-4 mt-6">
            <a
              href="https://wa.me/94706642049"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#1f2937] hover:bg-[#374151] transition px-5 py-2 rounded-full w-max text-white font-semibold shadow"
            >
              <SiWhatsapp size={20} className="text-green-400" />
              Message Soundgear
            </a>

            <div className="space-y-4 mt-4">
              <a
                href="https://www.facebook.com/share/17KXnSHYg8/?mibextid=wwXIfr"
                className="flex items-center gap-4 hover:translate-x-1 transition"
              >
                <FaFacebookF size={24} className="text-blue-500 drop-shadow-sm hover:drop-shadow" />
                <span>Follow Soundgear on Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/memorysoundgear?igsh=MTJtbWl5aW9ybGMxMA=="
                className="flex items-center gap-4 hover:translate-x-1 transition"
              >
                <FaInstagram size={24} className="text-pink-400 drop-shadow-sm hover:drop-shadow" />
                <span>Follow Soundgear on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 text-center border-t border-zinc-800 pt-8">
        <a
          href="https://drive.google.com/drive/folders/1zNLYVuxrW-a1Rb_CICq1DZUgPOHkNCyp?usp=sharing"
          target="_blank"
          className="inline-block px-6 py-3 bg-[#d4a373] hover:bg-[#b1865b] text-black font-bold rounded-full shadow-lg transition"
        >
          Download Our Media Kit
        </a>
        <p className="text-xs text-zinc-500 mt-6">
          &copy; {new Date().getFullYear()} Memory SL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
