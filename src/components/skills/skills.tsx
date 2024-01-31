import { CardSkills } from "../card-skills";
import { SkillsDev } from "@/data";
import { twMerge } from "tailwind-merge";

export const Skills = () => {
  return (
    <section className={twMerge("xl:h-[760px] xl:py-24 mt-28")}>
      <div className={twMerge("container mx-auto")}>
        <h2
          className={twMerge(
            "text-4xl font-bold relative w-max flex items-center justify-between gap-x-3",
            "before:bg-dots_light before:dark:bg-dots_dark before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]",
            "mb-8 xl:mb-16 text-center mx-auto"
          )}
        >
          Habilidades
        </h2>
        <div
          className={twMerge(
            "grid gap-5 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 px-2 mt-8"
          )}
        >
          <CardSkills skils={SkillsDev} />
        </div>
      </div>
    </section>
  );
};
