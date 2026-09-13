import { use } from "react";
import type TechnologiesType from "../type/TechnologiesType";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaCheck, FaStar } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const technologyIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Laravel: SiLaravel,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
};

interface TechnologiesProps {
  technologiesPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologiesData = use(technologiesPromise);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const handleButton = (technologyId: number) => {
    const technology = technologiesData.find(({ id }) => id === technologyId);

    if (selectedIds.includes(technologyId)) {
      toast.warning(`${technology?.name} is already in your stack.`);
      return;
    }

    setSelectedIds((currentIds) => [...currentIds, technologyId]);
    toast.success(`${technology?.name} added to your stack.`);
  };
  const handleRemove = (technologyId: number) => {
    const technology = technologiesData.find(({ id }) => id === technologyId);
    setSelectedIds((currentIds) =>
      currentIds.filter((id) => id !== technologyId),
    );
    toast.success(`${technology?.name} removed from your stack.`);
  };
  const selectedTechnologies = technologiesData.filter((technology) =>
    selectedIds.includes(technology.id),
  );
  return (
    <section
      id="technologies"
      className="scroll-mt-24 bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-20"
    >
      <div className="mx-auto">
        <h2 className="text-[30px] font-extrabold leading-tight tracking-[-1px] text-[#10182d] sm:text-[36px]">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>
        <p className="mt-2 text-sm text-[#71809b] sm:text-[16px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 items-start gap-6 sm:mt-12 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {technologiesData.map((technology) => {
            const isAdded = selectedIds.includes(technology.id);

            return (
              <article
                key={technology.id}
                className="min-h-[305px] rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-start justify-between">
                  {(() => {
                    const TechnologyIcon = technologyIcons[technology.name];
                    return (
                      <TechnologyIcon
                        aria-label={`${technology.name} icon`}
                        className="h-9 w-9"
                      />
                    );
                  })()}
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

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                  <span className="rounded bg-slate-100 px-2 py-1">
                    {technology.category}
                  </span>
                  <span>{technology.difficulty}</span>
                  <span className="font-medium text-slate-700">
                    <FaStar className="mr-1 inline text-amber-400" />
                    {technology.rating}
                  </span>
                </div>

                <button
                  onClick={() => handleButton(technology.id)}
                  type="button"
                  disabled={isAdded}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#080d1b] py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  {isAdded ? (
                    <>
                      <FaCheck aria-hidden="true" /> Added to Stack
                    </>
                  ) : (
                    "Add to Stack"
                  )}
                </button>
              </article>
            );
          })}
        </div>

        <aside className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
          <h3 className="text-lg font-bold text-[#10182d]">Your Stack</h3>
          <p className="mt-1 text-xs text-[#9aa8bd]">
            {selectedTechnologies.length === 0
              ? "No technologies selected yet."
              : `${selectedTechnologies.length} technolog${selectedTechnologies.length === 1 ? "y" : "ies"} selected.`}
          </p>

          {selectedTechnologies.length === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-slate-200 px-3 py-8 text-center text-xs text-[#9aa8bd]">
              Your stack is empty.
            </div>
          ) : (
            <ul className="mt-4 space-y-3">
              {selectedTechnologies.map((technology) => (
                <li
                  key={technology.id}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5"
                >
                  {(() => {
                    const TechnologyIcon = technologyIcons[technology.name];
                    return <TechnologyIcon className="h-8 w-8 shrink-0" />;
                  })()}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#10182d]">
                      {technology.name}
                    </p>
                    <p className="text-xs text-[#71809b]">
                      {technology.category}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Remove ${technology.name} from your stack`}
                    onClick={() => handleRemove(technology.id)}
                    className="ml-auto shrink-0 px-1 text-2xl font-light leading-none text-slate-400 transition-colors hover:text-[#df1476]"
                  >
                    <FiX aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {selectedTechnologies.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setSelectedIds([]);
                toast.success("All technologies removed from your stack.");
              }}
              className="mt-12 w-full rounded-lg border border-[#ff9b9b] py-1.5 text-sm font-semibold text-[#ef3d3d] transition-colors hover:bg-red-50"
            >
              Remove All
            </button>
          )}
        </aside>
      </div>
    </section>
  );
};

export default Technologies;
