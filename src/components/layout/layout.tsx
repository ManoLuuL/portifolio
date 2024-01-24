import { LayoutProps } from "./types";
import TopBar from "../topbar-menu/topbar-menu";
import { twMerge } from "tailwind-merge";
import useAppData from "@/globals/hooks/use-app-data";

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  const { Theme } = useAppData();

  return (
    <div
      className={`w-screen h-screen grid ${Theme}`}
      style={{
        gridTemplateAreas: `'topbar topbar topbar'
      'content content content'
      'content content content'
      'content content content'`,
        gridTemplateRows: `65px auto 1fr auto`,
        gridTemplateColumns: "auto 1fr auto",
      }}
    >
      <TopBar />

      <main
        className={twMerge(
          "overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800 dark:text-gray-200 text-gray-700 block w-full"
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
