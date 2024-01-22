import { SkillCardProps } from "./types";

const CardSkills = (props: SkillCardProps) => {
  const { skils } = props;

  return skils.map((data, index) => {
    const { description, icon } = data;
    return (
      <div
        key={index}
        className={`relative items-center bg-gray-500 dark:bg-gray-700 w-32 aspect-[1] p-0 flex flex-col 
        justify-center rounded-xl transition duration-200 dark:text-blue-400 text-blue-300 hover:scale-110 `}
      >
        <p className="pb-1">{description}</p>
        {icon}
      </div>
    );
  });
};

export default CardSkills;
