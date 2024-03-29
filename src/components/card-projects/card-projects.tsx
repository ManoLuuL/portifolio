"use client";

import { Button } from "../button";
import { CardProjectsProps } from "./types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const CardProjects = (props: CardProjectsProps) => {
  const { projects } = props;

  return projects.map((project, index) => {
    const { icons, src, title, situation, link } = project;
    return (
      <div className={twMerge("relative m-2 ")} key={`${title}-${index}`}>
        <h3 className={twMerge("text-xl font-bold")}>{title}</h3>
        <div
          className={twMerge(
            "before:hover:block before:hover:absolute before:hover:w-full before:hover:h-full group",
            "before:hover:bg-gray-400/80 before:hover:dark:bg-gray-800/70 hover:content-none",
            "hover:relative hover:w-full hover:before:rounded-lg",
            "transition duration-200  hover:scale-105"
          )}
        >
          <Image
            alt={title}
            className={twMerge(
              "rounded-lg mb-4 object-cover mt-4 w-full h-full border border-blue-600 dark:border-blue-500"
            )}
            src={src}
          />
          <div
            className={twMerge(
              "absolute w-full flex-col items-center flex justify-center opacity-0",
              "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
              "group-hover:opacity-100 transition-opacity duration-200"
            )}
          >
            <span className={twMerge("text-gray-100 font-bold")}>
              {situation}
            </span>
            <div className={twMerge("mt-2")}>
              <Button
                text="Ver mais"
                onClick={() => {
                  window.open(link, "_blank");
                }}
              />
            </div>
          </div>
        </div>
        <div className={twMerge("items-center flex space-x-2 mt-1")}>
          {icons.map((icon, index) => {
            return <div key={`icon-${index}`}>{icon}</div>;
          })}
        </div>
      </div>
    );
  });
};
