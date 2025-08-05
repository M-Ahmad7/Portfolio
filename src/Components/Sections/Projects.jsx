import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import ScrollAnimation from "../ScrollAnimation";

const Projects = () => {
  const projectSkills = ["CSS", "Tailwindcss", "Javascript"];
  return (
    <section
      id="projects"
      className="min-h-screen  flex items-center justify-center py-20 "
    >
      <ScrollAnimation>
        <div className=" max-w-5xl  mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50 , 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">To-Do-List</h3>
              <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
                A user-friendly To-Do List application that allows seamless
                creation of custom categories and task organization within them.
                Designed to enhance productivity through a clean and intuitive
                interface.
              </p>
              <div className="flex flex-wrap mb-2 gap-2">
                {projectSkills.map((skills, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50 , 130, 246, 0.1)] transition-all
                  "
                    >
                      {skills}
                    </span>
                  );
                })}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://m-ahmad7.github.io/j_todos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-between my-4 gap-3"
                >
                  View Project <FaProjectDiagram className="text-yellow-500" />
                </a>
              </div>
            </div>
            {/* 2nd project */}

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50 , 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Shoe Shop</h3>
              <p className="text-gray-400 mb-4">
                A modern Shoe Shop application designed with a user-friendly
                interface and powerful filtering options for category, price,
                color, and brand. Includes a responsive search bar to help users
                find products quickly and easily.
              </p>
              <div className="flex flex-wrap mb-2 gap-2">
                {["Tailwindcss", "React-Js"].map((skills, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50 , 130, 246, 0.1)] transition-all
                  "
                    >
                      {skills}
                    </span>
                  );
                })}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://m-ahmad7.github.io/Shoe-Shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-between my-4 gap-3"
                >
                  View Project <FaProjectDiagram className="text-yellow-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Projects;
