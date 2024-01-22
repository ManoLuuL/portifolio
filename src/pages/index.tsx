import { Button } from "@/components/button";
import { CardProjects } from "@/components/card-projects";
import CardSkills from "@/components/card-skills/card-skills";
import { Footer } from "@/components";
import Image from "next/image";
import Layout from "@/components/layout";
import Teste from "../assets/img.jpg";
import { skillTeste } from "@/globals/consts";

export default function Home() {
  return (
    <Layout>
      <section className="pb-5 flex justify-center mt-10 mb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Image
              alt="Developer"
              className="rounded-full"
              height={200}
              src={Teste}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width={200}
            />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Sobre mim
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Profissional especializado em desenvolvimento Front-End Web. No
              mercado há 3 anos, familiarizado com React, TypeScript,
              JavaScript, Tailwind e Next, com habilidades em MySQL, PostgreSQL.
              Prático em testes com Jest e Vitest. Bacharelado em Ciênica da
              Computação pela Unisagrado.
            </p>
          </div>
          <div className="gap-2 p-1 flex justify-center items-center">
            <Button text="Download CV" />
            <Button text="Contatos" />
          </div>
        </div>
      </section>

      <section
        className="w-full py-12 md:py-24 lg:py-32 justify-center flex"
        id="skills"
      >
        <div className="container px-4 md:px-6 w-[90%]">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Skills
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-8 mx-auto mt-8">
            <CardSkills skils={skillTeste} />
          </div>
        </div>
      </section>

      <section
        className="w-full py-12 md:py-24 lg:py-32 justify-center flex"
        id="projects"
      >
        <div className="container px-4 md:px-6 w-[90%]">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Projetos
          </h2>
          <div className="grid gap-4 grid-cols-4 mt-8">
            <CardProjects />
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
