"use client";

import { About, Footer, Hero, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-700 transition-colors duration-500">
      <Hero />
      <About />
      <Skills />

      <Projects />

      <Footer />
    </main>
  );
}
