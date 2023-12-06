import Content from "../content";
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
        className="overflow-x-hidden overflow-y-auto bg-surface-200 dark:bg-surface-800"
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
