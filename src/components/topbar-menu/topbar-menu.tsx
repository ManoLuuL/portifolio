import { FC, useState } from "react";
import { IconClose, IconMenu } from "../icons";

import { SwitchChangeTheme } from "../switch-change-theme";
import useAppData from "@/globals/hooks/use-app-data";

const TopBar: FC = () => {
  const { Theme, changeTheme } = useAppData();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      style={{
        gridArea: "topbar",
      }}
      className={`flex flex-wrap items-center gap-2 justify-between overflow-hidden w-full h-full overflow-x-auto overflow-y-auto z-[1]
      bg-gray-800 border-b-2 border-blue-400 dark:border-blue-400 border-solid px-3`}
    >
      <button
        className="text-2xl  hover:bg-blue-400 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? IconMenu : IconClose}
      </button>

      <div className="text-2xl dark:text-gray-200 text-gray-200 font-bold">
        Teste 2
      </div>

      <SwitchChangeTheme changeTheme={changeTheme} theme={Theme ?? "dark"} />
    </section>
  );
};

export default TopBar;
