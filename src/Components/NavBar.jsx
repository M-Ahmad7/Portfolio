import React, { useEffect, useState, useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { MdContactMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const NavBar = ({ menuOpen, setMenuOpen }) => {
  const [activeItem, setActiveItem] = useState("home");
  const indicatorRef = useRef(null);
  const itemRefs = useRef({});

  const navItems = [
    { id: "home", label: "Home", icon: <AiOutlineHome className="icon" /> },
    { id: "about", label: "About", icon: <CgProfile className="icon" /> },
    {
      id: "projects",
      label: "Projects",
      icon: <LiaProjectDiagramSolid className="icon" />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <MdContactMail className="icon" />,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const currentPage = window.location.hash.replace("#", "");
    if (currentPage) {
      setActiveItem(currentPage);
    }
  }, []);

  useEffect(() => {
    const activeRef = itemRefs.current[activeItem];
    const indicator = indicatorRef.current;
    if (activeRef && indicator) {
      indicator.style.left = `${activeRef.offsetLeft - 5}px`;
    }
  }, [activeItem]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.6,
      rootMargin: "0px 0px -20px 0px",
    });

    const sectionIds = navItems.map((item) => item.id);
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  });

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-lg border-b border-white/50 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-mono font-bold text-white">
            M<span className="text-blue-500 !text-lg font-mono">.Ahmad</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 text-lg md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex md:items-center space-x-9 relative">
            {navItems.map((item) => (
              <li
                key={item.id}
                ref={(el) => (itemRefs.current[item.id] = el)}
                className={`lii relative list-none w-[60px] h-[60px] z-1 cursor-pointer ${
                  activeItem === item.id ? "active" : ""
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <a
                  href={`#${item.id}`}
                  className="tag text-gray-300 relative flex flex-col justify-between items-center w-full text-center hover:text-white transition-colors"
                >
                  <span className="text ">{item.label}</span>
                  <div className="text-2xl leading-[75px]">{item.icon}</div>
                </a>
              </li>
            ))}
            <div
              className="indicator absolute transition-all duration-300"
              ref={indicatorRef}
            ></div>

            <div>
              <a
                href="https://github.com/M-Ahmad7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon text-[28px] mt-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
