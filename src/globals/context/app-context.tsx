"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

// @ts-ignore
export function AppProvider({ children, ...props }) {
  return <NextThemeProvider {...props}>{children} </NextThemeProvider>;
}
