import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen  md:gap-10 grid md:flex  md:grid-cols-2 place-items-center   items-center  justify-center relative"
    >
      <div className="Card h-[40rem] w-[20rem] max-sm:h-[250px] max-sm:w-[55%] md:h[50%] md:w-[35%] md:ml-4  lg:w-[27%] xl:w-[25%] 2xl:w-[20%] mt-18 ">
        <img
          src={`${import.meta.env.BASE_URL}me.png`}
          alt="Picture"
          className="max-sm:h-[99%] max-sm:w-[100%] h-[98%] w-[98%] "
        />
      </div>

      <div className="info flex flex-col justify-center items-center text-center w-[60%] z-10 px-4">
        <h1 className="text-2xl max-sm:mt-5 mt-3 md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-500 leading-tight bg-clip-text text-transparent">
          Hi, I'm M.Ahmad
        </h1>
        <p className="para text-gray-400  max-sm:w-[160%] max-sm:ml-[-3rem] max-sm:text-sm md:text-md mb-8 max-w-9xl mx-auto">
          I'm a web developer who loves building clean, intuitive interfaces
          especially with React.js. Front-end development is where I really
          thrive. I enjoy creating user experiences that feel smooth and
          thoughtful. I'm always curious and eager to learn, constantly
          exploring new tools and technologies to grow as a developer and keep
          up with the ever-changing tech landscape.
        </p>
        <div className="flex  max-sm:grid max-sm:grid-rows-2 max-sm:gap-5 max-sm:place-items-center justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-700  max-sm:h-[100%] max-sm:w-[100%] max-sm:ml-4 max-sm:place-items-center  text-white py-3 px-6 rounded font-medium transition  relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_10px_#3b82f6]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/50   text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_10px_#3b82f6] hover:bg-blue-500/10"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
