export type AppContextProvider = {
  children: any;
};

export type Theme = "dark" | "light";

export type AppContextProps = {
  Theme?: string;
  changeTheme?(): void;
};
