import { FC } from "react";
import { LayoutProps } from "./types";
import SidebarMenu from "../sidebar-menu";
import TopbarMenu from "../topbar-menu";
import Content from "../content";

const Layout: FC<LayoutProps> = (props) => {
  const { subTitle, title, children, hiddenTopbar = false } = props;

  return (
    <div className={`dark flex h-screen w-screen `}>
      <SidebarMenu />
      <div
        className={`
                flex flex-col w-full p-3 
                bg-gray-300 dark:bg-gray-800
            `}
      >
        {!hiddenTopbar && <TopbarMenu subTitle={subTitle} title={title} />}

        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
