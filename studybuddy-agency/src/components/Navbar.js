import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-wine w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-white text-2xl font-bold">
              Logo
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 justify-end flex-grow">
            <a href="#hero" className="text-white text-lg px-4 py-2 rounded-lg hover:bg-white hover:text-wine transition duration-300">
              Home
            </a>
            <a href="#about" className="text-white text-lg px-4 py-2 rounded-lg hover:bg-white hover:text-wine transition duration-300">
              About
            </a>
            <a href="#opportunities" className="text-white text-lg px-4 py-2 rounded-lg hover:bg-white hover:text-wine transition duration-300">
              Scholarships
            </a>
            <a href="#contact" className="text-white text-lg px-4 py-2 rounded-lg hover:bg-white hover:text-wine transition duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
