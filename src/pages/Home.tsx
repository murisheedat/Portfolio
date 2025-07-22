import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        👋 Hi, I’m Murisheedat
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
        Certified Full-Stack Software Developer
      </h2>
      <p className="max-w-xl text-gray-700 dark:text-gray-300 mb-6">
        I build modern, responsive, and scalable web applications using{" "}
        <span className="font-medium">
          TypeScript, React, Tailwind CSS, Node.js,
        </span>{" "}
        and <span className="font-medium">MongoDB</span>. I’m passionate about
        turning ideas into reality with clean code and thoughtful design.
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
          href="/Sulaimon_Murisheedat_CV.pdf"
          download
          className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Home;
