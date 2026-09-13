import { useState } from "react";
import logo from "../assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-10 w-full border-b border-slate-100 bg-white">
      <nav className="relative mx-auto flex min-h-20.5 items-center justify-between px-3 py-4 sm:px-5 lg:px-16">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-slate-700 lg:hidden"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <a
          href="#home"
          aria-label="DevStack home"
          className="absolute left-1/2 -translate-x-1/2 shrink-0 lg:static lg:translate-x-0"
        >
          <img
            src={logo}
            alt="DevStack"
            className="h-8 w-auto sm:h-9 lg:h-11"
          />
        </a>

        <ul
          className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 top-20.5 w-full flex-col gap-5 border-b border-slate-100 bg-white px-5 py-5 lg:left-1/2 lg:top-1/2 lg:flex lg:w-auto lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row lg:items-center lg:gap-10 lg:border-0 lg:bg-transparent lg:p-0`}
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

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4 lg:gap-7">
          <a
            href="#sign-in"
            className="text-xs font-medium text-slate-600 transition-colors hover:text-[#df1476] sm:text-sm lg:text-base"
          >
            Sign In
          </a>
          <a
            href="#sign-up"
            className="brand-gradient rounded-full px-3 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:px-4 sm:text-sm lg:px-7 lg:py-3 lg:text-base"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
