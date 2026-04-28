import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left - Logo */}
        <h2 className="text-xl font-bold tracking-wide">
          Devicharan
        </h2>

        {/* Center - Links */}
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Skills</li>
          <li className="hover:text-gray-400 cursor-pointer">Projects</li>
          <li className="hover:text-gray-400 cursor-pointer">Profile</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-xl">
          <FaGithub className="hover:text-gray-400 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-400 mt-4">
        © {new Date().getFullYear()} Devicharan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;