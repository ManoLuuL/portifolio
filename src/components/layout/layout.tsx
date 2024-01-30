import { useCallback, useEffect } from "react";

import { Footer } from "..";
import { LayoutProps } from "./types";
import TopBar from "../topbar-menu/topbar-menu";
import { twMerge } from "tailwind-merge";
import useAppData from "@/globals/hooks/use-app-data";

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  const { Theme } = useAppData();
  const scrollAnimation = useCallback(() => {
    const sections = document.querySelectorAll(".sections");

    const windowHalfSize = window.innerHeight * 0.6;

    const animateScroll = () => {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;

        const isSectionVisible = sectionTop - windowHalfSize < 0;

        if (isSectionVisible) {
          item.classList.add("animation");
        } else {
          item.classList.remove("animation");
        }
      });
    };

    animateScroll();
  }, []);

  useEffect(() => {
    const main = document.querySelector("main")!;
    main.addEventListener("scroll", scrollAnimation);

    return () => {
      main.removeEventListener("scroll", scrollAnimation);
    };
  }, [scrollAnimation]);

  return (
    <div className={twMerge("w-screen h-screen flex flex-col", Theme)}>
      <TopBar />

      <main className="overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800 dark:text-gray-200 text-gray-700 block w-full h-full">
        {children}
      </main>
    </div>
  );
};
