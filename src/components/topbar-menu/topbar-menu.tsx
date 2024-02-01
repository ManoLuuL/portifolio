"use client";

import { Logo, ThemeToggler } from "./components";

import { twMerge } from "tailwind-merge";

const TopBar = () => {
  return (
    <div
      className={twMerge(
        "fixed z-50 top-0 w-full items-center mx-auto flex flex-row justify-between bg-transparent px-3 h-14",
        "border-b-2 border-blue-400 dark:border-blue-400 border-solid bg-gray-300 dark:bg-gray-800"
      )}
    >
      <Logo />
      <ThemeToggler />
    </div>
  );
};

export default TopBar;
