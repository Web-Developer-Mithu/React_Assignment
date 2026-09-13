import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white px-5 py-12 text-[#71809b] sm:px-8 sm:py-16 lg:px-20">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
        <div>
          <img src={logo} alt="DevStack" className="h-9 w-auto" />
          <p className="mt-5 max-w-97.5 text-sm leading-6">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-7 flex gap-6 text-sm font-semibold text-slate-600">
            <a href="#github" className="hover:text-[#df1476]">
              GitHub
            </a>
            <a href="#twitter" className="hover:text-[#df1476]">
              Twitter
            </a>
            <a href="#linkedin" className="hover:text-[#df1476]">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#10182d]">
            Product
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="#home" className="hover:text-[#df1476]">
                Home
              </a>
            </li>
            <li>
              <a href="#technologies" className="hover:text-[#df1476]">
                Technologies
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#df1476]">
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#10182d]">
            Company
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="#about" className="hover:text-[#df1476]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#df1476]">
                Contact
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-[#df1476]">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#10182d]">
            Legal
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="#privacy" className="hover:text-[#df1476]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-[#df1476]">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-300 flex-col gap-4 border-t border-slate-100 pt-8 text-sm sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 DevStack. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#privacy" className="hover:text-[#df1476]">
            Privacy
          </a>
          <a href="#terms" className="hover:text-[#df1476]">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
