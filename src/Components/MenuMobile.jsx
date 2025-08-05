import React from "react";
import { FaGithub } from "react-icons/fa";
const MenuMobile = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed  top-0 gap-1 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all durration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        
        `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl   rounded-2xl font-semibold text-white my-4 px-3 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          
          `}
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold rounded-2xl px-3 text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          
          `}
      >
        About
      </a>

      <a
        href="#project"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold rounded-2xl px-3 text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          
          `}
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold rounded-2xl px-3 text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          
          `}
      >
        Contact
      </a>

      <a
        className={`text-2xl font-semibold rounded-2xl px-3 text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          
          `}
        onClick={() => setMenuOpen(false)}
        href="https://github.com/M-Ahmad7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon text-[28px] mt-2" />
      </a>
    </div>
  );
};

export default MenuMobile;
