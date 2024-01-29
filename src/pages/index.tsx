import {
  Button,
  CardProjects,
  CardSkills,
  Footer,
  Layout,
  ModalContact,
} from "@/components";
import { Projects, SkillsDev } from "@/data";

import Image from "next/image";
import { Profile } from "@/assets";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfile = () => {
    const profile = "/assets/Profile.pdf";
    const link = document.createElement("a");
    link.href = profile;
    link.download = "Currículo";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Layout>
      <section className={twMerge("px-20 py-10 mt-10 mb-20 w-full")} id="about">
        <div className={twMerge("flex justify-between items-center")}>
          <div>
            <h2
              className={twMerge(
                "text-3xl font-bold text-blue-400 dark:text-blue-500"
              )}
            >
              Bem-Vindo,
            </h2>
            <h1 className={twMerge("text-4xl font-bold")}>
              Eu sou Luis Ricardo
            </h1>
            <p className={twMerge("text-2xl mt-4 mb-8")}>
              Desenvolvedor Front-End
            </p>
            <div className={twMerge("flex space-x-4")}>
              <Button text="Download CV" onClick={handleProfile} />
            </div>
          </div>
          <div className={twMerge("relative")}>
            <div
              className={twMerge(
                "bg-blue-400 dark:bg-blue-500 rounded-full p-4 absolute -top-10 -right-10 w-40 h-40"
              )}
            />
            <div
              className={twMerge(
                "bg-blue-400 dark:bg-blue-500 rounded-full p-4 absolute -bottom-10 -left-10 w-64 h-64"
              )}
            />
            <div
              className={twMerge(
                "relative flex shrink-0 overflow-hidden rounded-full w-64 h-64"
              )}
            >
              <Image
                alt="Developer"
                className={twMerge("rounded-full aspect-square object-cover")}
                src={Profile}
              />
            </div>
          </div>
        </div>
        <div className={twMerge("flex flex-col w-[90%] space-y-4 mt-20")}>
          <h1
            className={twMerge(
              "text-3xl font-bold tracking-tighter sm:text-5xl"
            )}
          >
            Sobre mim
          </h1>
          <p
            className={twMerge(
              "text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            )}
          >
            Profissional especializado em desenvolvimento Front-End Web. No
            mercado há mais de 3 anos, familiarizado com React, TypeScript,
            JavaScript, Tailwind e Next, com habilidades em MySQL, PostgreSQL.
            Prático em testes com Jest e Vitest. Bacharelado em Ciênica da
            Computação pela Unisagrado.
          </p>
        </div>
      </section>

      <section
        className={twMerge("px-20 py-10 mt-10 mb-20 sections")}
        id="skills"
      >
        <div className={twMerge("w-full")}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Habilidades
          </h2>
          <div
            className={twMerge(
              "grid gap-5 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-10 px-2 mt-8"
            )}
          >
            <CardSkills skils={SkillsDev} />
          </div>
        </div>
      </section>

      <section
        className={twMerge("px-20 py-10 mt-10 mb-20 sections")}
        id="projects"
      >
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
      {isOpen && <ModalContact onClose={handleClose} />}
    </Layout>
  );
}
