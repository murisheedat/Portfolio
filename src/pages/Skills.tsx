import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiApollographql,
} from "react-icons/si";

const techSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "REST APIs", icon: <SiApollographql className="text-purple-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="Skills" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Tech Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {techSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 py-5 px-4 border rounded-xl shadow hover:shadow-md transition duration-200 bg-gray-50"
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="text-base font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
