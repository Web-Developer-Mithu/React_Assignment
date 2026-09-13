import stackImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-24 flex min-h-125 flex-col items-center justify-between gap-10 bg-white px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:flex-row lg:gap-20 lg:px-20 lg:pt-32"
    >
      <div className="w-full lg:w-[52%]">
        <h1 className="max-w-155 text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#10182d] sm:text-[48px]">
          Build Your Ideal
          <span className="brand-gradient-text block">Development Stack</span>
        </h1>

        <p className="mt-5 max-w-140 text-[15px] leading-6 text-slate-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
          <a
            href="#technologies"
            className="brand-gradient rounded-md px-3 py-2 text-xs font-bold text-white shadow-sm"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-md border border-slate-200 px-9 py-2 text-xs font-medium text-slate-600"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex w-full justify-center lg:w-[42%]">
        <img
          src={stackImage}
          alt="Development technology stack"
          className="h-60 w-60 object-contain sm:h-75 sm:w-75"
        />
      </div>
    </section>
  );
};

export default Hero;
