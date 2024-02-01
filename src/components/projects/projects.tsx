import { CardProjects } from "../card-projects";
import { MY_PROJECTS } from "@/data";
import { twMerge } from "tailwind-merge";

export const Projects = () => {
  return (
    <section className={twMerge("xl:py-24 mt-3")} id="projects">
      <div className={twMerge("container mx-auto")}>
        <h2
          className={twMerge(
            "text-4xl font-bold relative w-max flex items-center justify-between gap-x-3",
            "before:bg-dots_light before:dark:bg-dots_dark before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]",
            "mb-8 xl:mb-16 text-center mx-auto"
          )}
        >
          Projetos
        </h2>
        <div
          className={twMerge(
            "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8"
          )}
        >
          <CardProjects projects={MY_PROJECTS} />
        </div>
      </div>
    </section>
  );
};
