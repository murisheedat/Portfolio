import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300";

  return (
    <nav className=" text-white fixed top-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold">MyPortfolio</div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/projects" className={linkClasses}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
          <NavLink to="/" onClick={toggleMenu} className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={toggleMenu} className={linkClasses}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={linkClasses}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
