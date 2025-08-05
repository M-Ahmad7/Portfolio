import React from "react";
import { FaFire } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import ScrollAnimation from "../ScrollAnimation";

const About = () => {
  const frontendSkills = ["Tailwindcss", "JavaScript", "React"];
  const backendSkills = [""];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <ScrollAnimation>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all ">
            <p className="text-gray-300 mb-6">
              Passionate web developer with a strong focus on front-end
              technologies. Skilled in building clean, responsive, and
              user-friendly interfaces. Dedicated to continuous learning and
              staying current with the latest in web development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skills, key) => {
                    return (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50 , 130, 246, 0.2)] transition
                  "
                      >
                        {skills}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skills, key) => {
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
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="flex gap-3 text-xl font-bold mb-4">
                <FaFire className="text-blue-600" />
                Education
              </h3>
              <ul className="list-disc marker:text-yellow-500 list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S English Literature and Linguistics </strong>{" "}
                  ,Gomal University (2020-2024)
                </li>
                <li>Relevant Studies: Web Development</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="flex gap-3 text-xl font-bold mb-4">
                <FaBriefcase className="text-blue-600" />
                Work Experience
              </h3>
              <div className="space-y-4 text-gray-300 ">
                <h4>None</h4>
                {/* <p> What was your post in the compay and what duties you were assigned?</p> */}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
