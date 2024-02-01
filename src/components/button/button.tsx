"use client";

import { ButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Button = (props: ButtonProps) => {
  const { text, onClick, className, icon } = props;

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "inline-flex whitespace-nowrap items-center justify-center rounded-md text-sm font-medium relative select-none",
        "h-10 px-4 py-2 bg-gray-100 dark:bg-gray-800 border-blue-400 border-2 text-gray-700 dark:text-white",
        "before:bg-gradient-radial before:from-blue-300 before:to-gray-200 before:dark:from-blue-500 before:dark:to-gray-500 before:top-0 before:left-0",
        "transition-colors before:content-[''] before:absolute before:w-full before:h-full",
        "before:scale-x-0 before:transition-transform before:ease-in-out before:origin-right before:duration-500",
        "before:hover:scale-x-100 before:hover:origin-left",
        className
      )}
    >
      <span className="z-10 inline-flex gap-2 whitespace-nowrap items-center justify-center">
        {text} {icon}
      </span>
    </button>
  );
};
