import { FC } from "react";
import { LayoutProps } from "./types";
import TopBar from "../topbar-menu/topbar-menu";
import useAppData from "@/globals/hooks/use-app-data";

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  const { Theme } = useAppData();

  return (
    <div
      className={`w-screen h-screen grid ${Theme}`}
      style={{
        gridTemplateAreas: `'sidebar topbar topbar'
      'content content content'
      'content content content'
      'content content content'`,
        gridTemplateRows: `65px auto 1fr auto`,
        gridTemplateColumns: "auto 1fr auto",
      }}
    >
      <TopBar />

      <main
        className="overflow-x-hidden overflow-y-auto bg-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-700 block w-full"
        style={{
          gridArea: "content",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
