import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <header className="border-b border-slate-100 bg-white">
      <nav className="mx-auto flex min-h-[82px] min-w-[1100px] items-center justify-evenly px-16 py-4">
        <a href="#home" aria-label="DevStack home" className="shrink-0">
          <img src={logo} alt="DevStack" className="h-11 w-auto" />
        </a>

        <div className="flex items-center gap-20">
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="#home"
                className="font-medium text-[#df1476] transition-colors hover:text-[#b50d5c]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="font-medium text-slate-600 transition-colors hover:text-[#df1476]"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="font-medium text-slate-600 transition-colors hover:text-[#df1476]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-medium text-slate-600 transition-colors hover:text-[#df1476]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-medium text-slate-600 transition-colors hover:text-[#df1476]"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-7">
            <a
              href="#sign-in"
              className="font-medium text-slate-600 transition-colors hover:text-[#df1476]"
            >
              Sign In
            </a>
            <a
              href="#sign-up"
              className="rounded-full bg-[#df1476] px-7 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#b50d5c]"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
