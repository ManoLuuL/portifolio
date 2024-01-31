"use client";

import { About, Footer, Hero, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />

      <Projects />

      <Footer />
    </main>
  );
}
