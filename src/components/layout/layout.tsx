import { useCallback, useEffect } from "react";

import { LayoutProps } from "./types";
import TopBar from "../topbar-menu/topbar-menu";
import { twMerge } from "tailwind-merge";
import useAppData from "@/globals/hooks/use-app-data";

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  const { Theme } = useAppData();
  const scrollAnimation = useCallback(() => {
    const sections = document.querySelectorAll(".js-section");

    const windowHalfSize = window.innerHeight * 0.6;

    const animateScroll = () => {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;

        const isSectionVisible = sectionTop - windowHalfSize < 0;

        if (isSectionVisible) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
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
    <div
      className={`w-screen h-screen grid ${Theme}`}
      style={{
        gridTemplateAreas: `'topbar'
      'content'`,
        gridTemplateRows: `65px auto 1fr auto`,
        gridTemplateColumns: "auto 1fr auto",
      }}
    >
      <TopBar />

      <main
        className={twMerge(
          "overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800 dark:text-gray-200 text-gray-700 block w-full h-full"
        )}
        style={{
          gridArea: "content",
        }}
      >
        {children}
      </main>
    </div>
  );
};
