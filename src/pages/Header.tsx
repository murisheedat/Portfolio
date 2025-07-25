import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
      <div className="flex items-center justify-between px-6 md:px-20">
        <h1 className="font-extrabold text-2xl">PORTFOLIO</h1>

        {/* Hamburger Icon for mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-semibold text-lg">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Projects">Project</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 mt-2 space-y-2 bg-white pb-4">
          <a href="#Home" className="block">
            Home
          </a>
          <a href="#About" className="block">
            About
          </a>
          <a href="#Projects" className="block">
            Project
          </a>
          <a href="#Contact" className="block">
            Contact
          </a>
          <a href="#Skills" className="block">
            Skills
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
