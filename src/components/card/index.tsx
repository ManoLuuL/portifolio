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
        relative items-center bg-gray-700 w-32 aspect-[1] p-0 flex flex-col justify-center cursor-pointer rounded-tl-xl transition duration-200 text-blue-400
        after:block after:absolute after:w-full after:h-1 after:bottom-[-0.1rem] after:left-0 hover:scale-110 after:bg-gradient-to-r from-blue-400 to-blue-600
        `}
      >
        <p>{description}</p>
        {icon}
      </div>
    );
  });
};

export default SkillCard;
