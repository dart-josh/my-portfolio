import { BriefcaseBusiness, MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <nav className="flex items-center justify-between px-3 sm:px-6 mx-0 sm:mx-auto max-w-[1200px] pt-5 pb-3 bg-slate-900">
        {/* Logo */}
        <Link to={'/'} className="text-4xl items-end text-white font-bold flex">
          Josh
          <span className="text-teal-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {links.map((link, i) => (
            <div key={i}>
              {" "}
              <NavMenuTile link={link} />
            </div>
          ))}
          <HireMe />
        </ul>

          {/* mobile menu button */}
        <div className="flex md:hidden items-center justify-end gap-5">
          <HireMe />
          {/* Toggle Button */}
          <MenuIcon
            size={30}
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-teal-500 cursor-pointer active:scale-95 hover:scale-110 transition"
          />
        </div>
      </nav>

      {/* back cover */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed top-0 right-0 h-full w-full bg-black/70 shadow-lg transform transition-transform duration-300 md:hidden z-40 ${
          menuOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      ></div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] sm:w-[280px] bg-slate-900 shadow-lg transform transition-transform duration-300 md:hidden z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* close button */}
        <div className="flex justify-end p-4">
          <X
            onClick={() => setMenuOpen(false)}
            className="text-teal-500 cursor-pointer hover:scale-110 active:scale-90 transition "
            size={25}
          />
        </div>

        <div className="text-5xl items-end text-white font-bold flex justify-center mt-20">
          Josh
          <span className="text-teal-500">.</span>
        </div>

        {/* Menu */}
        <ul className="flex flex-col items-center mt-30 text-white p-4 space-y-4">
          {links.map((link, i) => (
            <div key={i} onClick={() => setMenuOpen(false)}>
              <NavMenuTile link={link} i={i} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

const NavMenuTile = ({ link }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <li
      className={`text-[20px] md:text-[16px] lg:text-[18px] transition duration-300 ${
        link.path == pathname
          ? "underline text-teal-500 scale-115"
          : "hover:scale-105 active:scale-95 text-white hover:text-teal-500"
      }`}
    >
      <Link to={link.path}>{link.name}</Link>
    </li>
  );
};

const HireMe = () => {
  return (
    <Link
      to={"/hire"}
      className="bg-teal-500 flex hover:bg-transparent duration-300 transition text-black hover:text-white border rounded-3xl text-[16px] font-semibold cursor-pointer border-teal-500 text-sm py-1 sm:py-1.5 px-3 sm:px-4 ml-2 shadow-2xl group items-center gap-2 justify-center"
    >
      <BriefcaseBusiness
        size={20}
        className="group-hover:text-teal-500 text-gray-800 transition duration-300"
      />
      <span className="hidden sm:flex">Hire me</span>
    </Link>
  );
};

export default Header;
