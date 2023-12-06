import { ButtonChangeTema } from "../button-change-theme";
import { FC } from "react";
import { IconMenu } from "../icons";
import useAppData from "@/globals/hooks/use-app-data";

const TopBar: FC = () => {
  const { Theme, changeTheme } = useAppData();

  return (
    <section
      style={{
        gridArea: "topbar",
      }}
      className={`flex items-center justify-between gap-2 overflow-hidden w-full h-full overflow-x-auto overflow-y-auto z-[1] 
      bg-slate-300 dark:bg-slate-700 border-b-2 border-slate-200 border-solid`}
    >
      <button
        className="text-2xl pl-8"
        onClick={() => console.log("Abrir menu")}
      >
        {IconMenu}
      </button>

      <span className="text-2xl">Portifolio</span>

      <ButtonChangeTema changeTheme={changeTheme} theme={Theme ?? "dark"} />
    </section>
  );
};

export default TopBar;
