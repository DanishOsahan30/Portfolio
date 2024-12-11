import { useState } from "react";
import { navLinks } from "../constants/index.js";

const Navitems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item, index) => (
        <li className="nav-li" key={index}>
          <a href={item.href} className="nav-li_a">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="w-full fixed top-0 left-0 righ-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className=" text-neutral-400 text-xl font-bold hover:text-white transition-colors"
          >
            Danish Osahan
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          {/*Desktop Navigation Bar*/}
          <nav className="sm:flex hidden">
            <Navitems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"} `}>
        <nav className="p-5">
          <Navitems />
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
