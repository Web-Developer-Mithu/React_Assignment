import { use } from "react";
import type TechnologiesType from "../type/TechnologiesType";

interface TechnologiesProps {
  technologiesPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologiesData = use(technologiesPromise);

  return (
    <section className="bg-white px-20 py-16">
      <div className="mx-auto ">
        <h2 className="text-[36px] font-extrabold leading-tight tracking-[-1px] text-[#10182d]">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#df1476] to-[#aa3acb] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="mt-2 text-[16px] text-[#71809b]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-[1fr_250px] items-start gap-6">
        <div className="grid grid-cols-3 gap-6">
          {technologiesData.map((technology) => (
            <article
              key={technology.id}
              className="min-h-[305px] rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-start justify-between">
                <img
                  src={technology.icon}
                  alt={`${technology.name} icon`}
                  className="h-9 w-9 object-contain"
                />
                <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
                  {technology.badge}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#10182d]">
                {technology.name}
              </h3>
              <p className="mt-2 min-h-[66px] text-sm leading-5 text-[#71809b]">
                {technology.description}
              </p>

              <div className="my-4 border-t border-slate-100" />

              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="rounded bg-slate-100 px-2 py-1">
                  {technology.category}
                </span>
                <span>{technology.difficulty}</span>
                <span className="font-medium text-slate-700">
                  <span className="mr-1 text-amber-400">&#9733;</span>
                  {technology.rating}
                </span>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-lg bg-[#080d1b] py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700"
              >
                Add to Stack
              </button>
            </article>
          ))}
        </div>

        <aside className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
          <h3 className="text-lg font-bold text-[#10182d]">Your Stack</h3>
          <p className="mt-1 text-xs text-[#9aa8bd]">
            No technologies selected yet.
          </p>

          <div className="mt-4 rounded-xl border border-dashed border-slate-200 px-3 py-8 text-center text-xs text-[#9aa8bd]">
            Your stack is empty.
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Technologies;
