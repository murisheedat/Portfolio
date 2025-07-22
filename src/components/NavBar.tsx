import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 rounded hover:bg-cyan-500 transition ${
      isActive ? "text-white font-bold bg-cyan-600" : "text-white"
    }`;

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-semibold">
          Sulaimon Murisheedat Omobolanle
        </h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
