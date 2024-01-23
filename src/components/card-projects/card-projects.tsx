import { Button } from "../button";
import { CardProjectsProps } from "./types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const CardProjects = (props: CardProjectsProps) => {
  const { projects } = props;

  return projects.map((project, index) => {
    const { icons, src, title, situation, link } = project;
    return (
      <>
        <div className={twMerge("relative")} key={index}>
          <h3 className="text-xl font-bold">{title}</h3>
          <div
            className={twMerge(
              "before:hover:block before:hover:absolute before:hover:w-full before:hover:h-full group",
              "before:hover:bg-gray-400/80 before:hover:dark:bg-gray-800/70 hover:content-none hover:relative hover:w-full hover:before:rounded-lg",
              "transition duration-200"
            )}
          >
            <Image
              alt={title}
              className="rounded-lg mb-2 object-cover aspect-auto mt-1"
              height="200"
              src={src}
            />
            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col items-center flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-gray-100">{situation}</span>
              <div>
                <Button
                  text="Ver mais"
                  small={true}
                  onClick={() => {
                    window.open(link, "_blank");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="items-center flex space-x-2 mt-1">
            {icons.map((icon, index) => {
              return <div key={index}>{icon}</div>;
            })}
          </div>
        </div>
      </>
    );
  });
};
