import { FC } from "react";
import { SidebarMenu } from "./types";
import SidebarMenuItem from "./sidebar-menu-item";
import { IconAcademic, IconHome, IconProject } from "../icons";

const SidebarMenu: FC<SidebarMenu> = () => {
  return (
    <>
      <aside className="flex flex-col dark:bg-gray-900 dark:text-gray-200 bg-gray-200 text-gray-700">
        <ul className="flex-grow">
          <SidebarMenuItem url="/" text="Inicio" icon={IconHome} />
          <SidebarMenuItem url="/projetos" text="Projetos" icon={IconProject} />
          <SidebarMenuItem
            url="/formacoes"
            text="Formações"
            icon={IconAcademic}
          />
        </ul>
      </aside>
    </>
  );
};

export default SidebarMenu;
