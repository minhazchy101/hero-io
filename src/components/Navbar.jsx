import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import Logo from "../reuse-components/Logo";
import { IoIosClose, IoIosMenu } from "react-icons/io";
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
    to="/apps"
    end
    className={({ isActive }) =>
      `mx-2 ${
        isActive
          ? "text-primary font-semibold border-b border-primary"
          : "hover:text-primary/80 hover:border-b border-primary transition"
      }`
    }
  >
    Apps
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
   <nav className="sticky top-0 z-50 w-full h-16 px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D]">  
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
      {isOpen ? <IoIosClose size={30}/> :<IoIosMenu size={30} />}
      </button>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} absolute top-17.5 left-0 w-full bg-white p-6 md:hidden`}>
        <ul className="flex flex-col space-y-4 text-lg">
    {navItems}
         </ul>

        <a  href="https://github.com/minhazchy101" target="blank" className="flex items-center justify-center gap-2 btn-primary">
  <FaGithub size={20} /> Contribute
</a>
      </div>
    </nav>
  );
};

export default Navbar;