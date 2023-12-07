import { FC } from "react";
import { SkillCardProps } from "./types";

const SkillCard: FC<SkillCardProps> = (props) => {
  const { skils } = props;

  return skils.map((data, index) => {
    const { description, icon } = data;
    return (
      <div
        key={index}
        className={`
        relative items-center bg-gray-500 dark:bg-gray-700 w-32 aspect-[1] p-0 flex flex-col justify-center rounded-t-xl transition duration-200 dark:text-blue-400 text-blue-300
        after:block after:absolute after:w-full after:h-1 after:bottom-[-0.1rem] after:left-0 hover:scale-110 after:bg-gradient-to-r from-blue-400 to-blue-600
        `}
      >
        <p className="pb-1">{description}</p>
        {icon}
      </div>
    );
  });
};

export default SkillCard;
