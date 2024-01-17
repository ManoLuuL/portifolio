import { CardContactProps } from "./types";
import Image from "next/image";

export const CardContact = (props: CardContactProps) => {
  const { image, subTitle, title, link } = props;

  return (
    <div className="flex flex-col items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110 w-36">
      <a href={link} target="_blank" className="mb-4 w-fit">
        <div className="flex justify-center items-center bg-gray-500 dark:bg-gray-700 rounded-full h-20 w-20">
          <Image alt={title} src={image} className="p-4" />
        </div>
      </a>
      <a href={link} target="_blank" className="mb-2 w-fit">
        <p className="font-bold text-gray-600 dark:text-gray-100 text-2xl">
          {title}
        </p>
      </a>
      <a href={link} target="_blank" className="w-fit">
        <p className="font-bold text-gray-600 dark:text-gray-300 text-lg">
          {subTitle}
        </p>
      </a>
    </div>
  );
};
