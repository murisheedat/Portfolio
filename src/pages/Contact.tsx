import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
      <ul className="space-y-4 text-lg">
        <li className="flex items-center space-x-2">
          <FaEnvelope />
          <a
            href="mailto:sualimonmurisheedat@gmail.com"
            className="text-cyan-600"
          >
            sualimonmurisheedat@gmail.com
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaGithub />
          <a
            href="https://github.com/murisheedat"
            target="_blank"
            className="text-cyan-600"
          >
            github.com/murisheedat
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/murisheedat-sulaimon"
            target="_blank"
            className="text-cyan-600"
          >
            linkedin.com/in/murisheedat-sulaimon
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
