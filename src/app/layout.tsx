import "./globals.css";

import { AppProvider } from "@/globals";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import TopBar from "@/components/topbar-menu/topbar-menu";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Ricardo - Desenvolvedor Front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={outfit.className}>
        <AppProvider attribute="class" defaultTheme="dark">
          <TopBar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
