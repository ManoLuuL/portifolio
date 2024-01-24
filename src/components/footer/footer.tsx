import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Footer = () => {
  return (
    <>
      <footer
        className={twMerge(
          "flex items-center h-16 px-4 border-t shrink-0",
          "border-gray-800 dark:border-gray-50 md:px-6 transition duration-200"
        )}
      >
        <p className={twMerge("text-xs text-gray-500 dark:text-gray-400")}>
          © 2024 Luis Ricardo C. Couto. All rights reserved.
        </p>
        <nav className={twMerge("ml-auto flex gap-4 sm:gap-6")}>
          <Link
            className={twMerge("text-xs hover:underline underline-offset-4")}
            href="https://www.linkedin.com/in/luis-ricardo-coelho-couto-26ba151b4/"
          >
            LinkedIn
          </Link>
          <Link
            className={twMerge("text-xs hover:underline underline-offset-4")}
            href="https://github.com/ManoLuuL"
          >
            GitHub
          </Link>
        </nav>
      </footer>
    </>
  );
};
