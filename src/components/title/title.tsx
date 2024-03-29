import { TitleProps } from "./types";
import { twMerge } from "tailwind-merge";

const Title = (props: TitleProps) => {
  const { subTitle, title } = props;

  return (
    <div>
      <h1
        className={twMerge(
          "font-black text-3xl text-gray-900 dark:text-gray-100"
        )}
      >
        {title}
      </h1>
      <h2 className={twMerge("font-light text-sm  dark:text-gray-300")}>
        {subTitle}
      </h2>
    </div>
  );
};

export default Title;
