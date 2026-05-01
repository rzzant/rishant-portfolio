import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col justify-between h-[60vh] text-gray-400">

      {/* Navigation */}
      <div className="space-y-6 text-xs tracking-widest">
        <a href="#" className="block hover:text-white transition">
          HOME
        </a>
        <a href="#projects" className="block hover:text-white transition">
          WORKS
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center gap-6 text-lg">

        <a 
          href="https://github.com/rzzant" 
          target="_blank"
          className="hover:text-white transition transform hover:scale-125"
        >
          <FaGithub />
        </a>

        <a 
          href="https://linkedin.com/in/YOUR-LINK" 
          target="_blank"
          className="hover:text-white transition transform hover:scale-125"
        >
          <FaLinkedin />
        </a>

        <a 
          href="mailto:singhrishant10@gmail.com"
          className="hover:text-white transition transform hover:scale-125"
        >
          <FaEnvelope />
        </a>

      </div>

    </div>
  );
}