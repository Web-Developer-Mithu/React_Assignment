import stackImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="flex min-h-[500px] items-center justify-between gap-20 bg-white px-20 py-16">
      <div className="w-[52%]">
        <h1 className="max-w-[620px] text-[48px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#10182d]">
          Build Your Ideal
          <span className="block bg-gradient-to-r from-[#ff4b22] via-[#ed235d] to-[#9c26ca] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 max-w-[560px] text-[15px] leading-6 text-slate-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-10 flex items-center gap-3">
          <a
            href="#technologies"
            className="rounded-md bg-gradient-to-r from-[#ff7618] to-[#e92c8b] px-3 py-2 text-xs font-bold text-white shadow-sm"
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

      <div className="flex w-[42%] justify-center">
        <img
          src={stackImage}
          alt="Development technology stack"
          className="h-[300px] w-[300px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
