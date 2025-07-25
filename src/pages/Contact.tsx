import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact" className="max-w-2xl mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Me</h2>
      <div className="mt-10 flex justify-center gap-6">
        <a
          href="mailto:sualimonmurisheedat@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-100 p-4 rounded-full text-blue-600 text-2xl hover:bg-blue-600 hover:text-white transition duration-300"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/murisheedat-sulaimon"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-100 p-4 rounded-full text-blue-700 text-2xl hover:bg-blue-700 hover:text-white transition duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/murisheedat"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 p-4 rounded-full text-gray-800 text-2xl hover:bg-gray-800 hover:text-white transition duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;
