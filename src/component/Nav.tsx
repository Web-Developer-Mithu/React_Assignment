import { useState } from "react";
import logo from "../assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-10 w-full border-b border-slate-100 bg-white">
      <nav className="relative mx-auto flex min-h-[82px] items-center justify-between px-5 py-4 md:px-8 lg:px-16">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center text-slate-700 md:hidden"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <a
          href="#home"
          aria-label="DevStack home"
          className="absolute left-1/2 -translate-x-1/2 shrink-0 md:static md:translate-x-0"
        >
          <img src={logo} alt="DevStack" className="h-9 w-auto md:h-11" />
        </a>

        <ul
          className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 top-[82px] w-full flex-col gap-5 border-b border-slate-100 bg-white px-5 py-5 md:left-1/2 md:top-1/2 md:flex md:w-auto md:-translate-x-1/2 md:-translate-y-1/2 md:flex-row md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0`}
        >
          <li>
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-[#df1476] transition-colors hover:text-[#b50d5c]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-slate-600 transition-colors hover:text-[#df1476]"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-slate-600 transition-colors hover:text-[#df1476]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-slate-600 transition-colors hover:text-[#df1476]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-slate-600 transition-colors hover:text-[#df1476]"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-2 md:gap-7">
          <a
            href="#sign-in"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#df1476] md:text-base"
          >
            Sign In
          </a>
          <a
            href="#sign-up"
            className="brand-gradient rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 md:px-7 md:py-3 md:text-base"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
