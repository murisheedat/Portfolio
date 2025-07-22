const Project = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-lg font-bold">PiggyVest Cloning</h3>
          <p className="text-gray-700">
            A piggyVest platform with multiple pages and routing. <br />
            Built with React, JavaScript, Tailwind CSS and styled-components.
          </p>
          <a
            href="https://github.com/murisheedat/Piggy-Assignment.git"
            target="_blank"
            className="text-cyan-700"
          >
            GitHub
          </a>
        </li>
        <li>
          <h3 className="text-lg font-bold">Portfolio Website</h3>
          <p className="text-gray-700">
            A personal portfolio showcasing my work and skills. <br />
            built with React, TypeScript, Tailwind CSS
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Project;
