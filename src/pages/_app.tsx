import "@/styles/globals.css";
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import { AppProvider } from "@/globals/context/app-context";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>Luis Ricardo - Desenvolvedor Front-end</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}
