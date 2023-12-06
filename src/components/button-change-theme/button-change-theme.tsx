import { IconMoon, IconSun } from "../icons";

import { ButtonChangeThemeProps } from "./types";
import { FC } from "react";

export const ButtonChangeTema: FC<ButtonChangeThemeProps> = (props) => {
  const { changeTheme, theme } = props;

  return (
    <div className="pr-5">
      {theme === "dark" ? (
        <div
          onClick={changeTheme}
          className={`bg-gradient-to-r from-yellow-300 to-yellow-600 w-7 lg:w-14 h-7 hidden  sm:flex items-center justify-start cursor-pointer p-1 rounded-full `}
        >
          <div className="flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full">
            {IconSun(4)}
          </div>
        </div>
      ) : (
        <div
          onClick={changeTheme}
          className={`hidden  sm:flex items-center justify-end cursor-pointer
      bg-gradient-to-r from-gray-500 to-gray-900 
      w-7 lg:w-14 h-7 p-1 rounded-full`}
        >
          <div className="flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full">
            {IconMoon(4)}
          </div>
        </div>
      )}
    </div>
  );
};
