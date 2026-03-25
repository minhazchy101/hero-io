import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import Logo from "../reuse-components/Logo";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = <>
 <li>
  <NavLink
    to="/"
    end
     className={({ isActive }) =>
      `mx-2 ${
        isActive
          ? "text-primary font-semibold border-b border-primary"
          : "hover:text-primary/80 hover:border-b border-primary transition"
      }`
    }
  >
    Home
  </NavLink>
</li>
 <li>
  <NavLink
    to="/about"
    end
    className={({ isActive }) =>
      `mx-2 ${
        isActive
          ? "text-primary font-semibold border-b border-primary"
          : "hover:text-primary/80 hover:border-b border-primary transition"
      }`
    }
  >
    About
  </NavLink>
</li>
 <li>
  <NavLink
    to="/installation"
    end
     className={({ isActive }) =>
      `mx-2 ${
        isActive
          ? "text-primary font-semibold border-b border-primary"
          : "hover:text-primary/80 hover:border-b border-primary transition"
      }`
    }
  >
    Installation
  </NavLink>
</li>
</>

  return (
    <nav className="h-17.5 relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      
      {/* Logo */}
     <Logo/>

      {/* Desktop Menu */}
      <ul className="md:flex hidden items-center gap-10">
      {navItems}
       </ul>

      {/* Desktop Button */}
      <a href="https://github.com/minhazchy101" target="blank" className="md:flex hidden items-center gap-4 px-6 py-2 font-semibold text-white bg-linear-to-r from-primary to-purple-600 rounded-lg hover:from-purple-600 hover:to-primary transition-all duration-300 cursor-pointer">
  <FaGithub size={28} /> Contribute
</a>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-block md:hidden active:scale-90 transition"
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="#000">
          <path d="M 3 7 L 27 7 M 3 14 L 27 14 M 3 21 L 27 21" stroke="black" strokeWidth="2"/>
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} absolute top-17.5 left-0 w-full bg-white p-6 md:hidden`}>
        <ul className="flex flex-col space-y-4 text-lg">
    {navItems}
         </ul>
{/* 
        <button
          type="button"
          className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
         Contribute
        </button> */}
        <a href="https://github.com/minhazchy101" target="blank" className="flex items-center justify-center gap-2 px-3 py-1 font-semibold text-white bg-linear-to-r from-primary to-purple-600 rounded-lg hover:from-purple-600 hover:to-primary transition-all duration-300 cursor-pointer text-sm w-40 h-11 mt-6">
  <FaGithub size={20} /> Contribute
</a>
      </div>
    </nav>
  );
};

export default Navbar;