import { IconMoon, IconSun } from "../icons";

import { ButtonChangeThemeProps } from "./types";
import { FC } from "react";

export const SwitchChangeTheme: FC<ButtonChangeThemeProps> = (props) => {
  const { changeTheme, theme } = props;

  return (
    <div className="">
      {theme === "dark" ? (
        <div
          onClick={changeTheme}
          className={`bg-slate-200 dark:bg-slate-500 w-7 lg:w-14 h-7 hidden  sm:flex items-center justify-start cursor-pointer p-1 rounded-full `}
        >
          <div className="flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full"></div>
        </div>
      ) : (
        <div
          onClick={changeTheme}
          className={`hidden  sm:flex items-center justify-end cursor-pointer
          bg-blue-400 w-7 lg:w-14 h-7 p-1 rounded-full`}
        >
          <div className="flex items-center justify-center bg-gray-700 text-yellow-300 w-6 h-6 rounded-full"></div>
        </div>
      )}
    </div>
  );
};
