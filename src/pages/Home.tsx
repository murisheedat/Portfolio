import React from "react";

const Home: React.FC = () => {
  return (
    <div
      id="Home"
      className="min-h-screen justify-center items-center text-center px-4 bg-white pt-10 scroll-mt-40"
    >
      <div className="flex justify-between pt-20 md:flex-row flex-col gap-10 items-center  ">
        <div>
          {" "}
          <h1 className="text-2xl md:text-3xl font-bold mb-4 ">
            👋 Hi, I’m Sulaimon Murisheedat Omobolanle
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Certified Full-Stack Software Developer
          </h2>
          <p className="max-w-xl mb-6">
            I build modern, responsive, and scalable web applications using{" "}
            <span className="font-medium">
              TypeScript, React, Tailwind CSS, Node.js,
            </span>{" "}
            and <span className="font-medium">MongoDB</span>. I’m passionate
            about turning ideas into reality with clean code and thoughtful
            design.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://www.linkedin.com/in/murisheedat-sulaimon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/murisheedat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
            >
              GitHub
            </a>
            <a
              href="/Sulaimon_Murisheedat_CV (2).pdf"
              download
              className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Download CV
            </a>
          </div>
        </div>
        <div>
          {" "}
          <img className="h-80 rounded-full" src="./bolanle.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
