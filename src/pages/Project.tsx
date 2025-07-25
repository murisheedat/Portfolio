const projects = [
  {
    title: "PiggyVest Clone",
    description: "A responsive savings app clone using React and Tailwind CSS.",
    image: "./piggy.jpeg",
    demoLink: "https://piggy-assignment-um8s.vercel.app/",
    githubLink: "https://github.com/murisheedat/Piggy-Assignment.git",
  },
  {
    title: "Meta Clone",
    description: "using HTML and CSS.",
    image: "./meta (2).png",
    demoLink: "https://meta-eight-cyan.vercel.app/",
    githubLink: "https://github.com/murisheedat/meta.git",
  },
  {
    title: "Moove Clone",
    description: "using HTML and CSS.",
    image: "./moove.jpeg",
    demoLink: "https://moove-psi.vercel.app/",
    githubLink: "https://github.com/murisheedat/moove.git",
  },
  {
    title: "Coolors Clone",
    description: "using HTML and CSS.",
    image: "./coolors.jpeg",
    demoLink: "https://coolors-alpha.vercel.app/",
    githubLink: "https://github.com/murisheedat/coolors.git",
  },
  // Add more projects as needed
];

const Project: React.FC = () => {
  return (
    <section id="Projects" className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 font-medium hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
