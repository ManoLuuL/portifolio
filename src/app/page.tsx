"use client";

import { About, CardProjects, CardSkills, Footer, Hero } from "@/components";
import { Projects, SkillsDev } from "@/data";

import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <section className={twMerge("px-20 py-10 mt-16 mb-20 ")} id="skills">
        <div className={twMerge("w-full")}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Habilidades
          </h2>
          <div
            className={twMerge(
              "grid gap-5 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 px-2 mt-8"
            )}
          >
            <CardSkills skils={SkillsDev} />
          </div>
        </div>
      </section>

      <section className={twMerge("px-20 py-10 mt-10 mb-20 ")} id="projects">
        <div className={twMerge("w-full")}>
          <h2
            className={twMerge(
              "text-3xl font-bold tracking-tighter sm:text-5xl"
            )}
          >
            Projetos
          </h2>
          <div
            className={twMerge(
              "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8"
            )}
          >
            <CardProjects projects={Projects} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
