import { SkillCardProps } from "./types";
import { twMerge } from "tailwind-merge";

export const CardSkills = (props: SkillCardProps) => {
  const { skils } = props;

  return skils.map((data, index) => {
    const { description, icon } = data;
    return (
      <div
        key={index}
        className={twMerge(
          "relative items-center bg-gray-300 dark:bg-gray-700 w-32 aspect-[1] p-0 flex flex-col",
          "justify-center rounded-xl transition duration-200 dark:text-blue-400 text-blue-500 hover:scale-110"
        )}
      >
        <p className={twMerge("pb-1 select-none")}>{description}</p>
        {icon}
      </div>
    );
  });
};
