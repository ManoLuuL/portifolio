import {
  Button,
  CardProjects,
  CardSkills,
  Footer,
  Layout,
  ModalContact,
} from "@/components";
import { Projects, SkillsDev } from "@/globals";

import Image from "next/image";
import { Modal } from "@/components/modal/modal";
import Teste from "../assets/img.jpg";
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
      <section className={twMerge("pb-5 flex justify-center mt-10 mb-20")}>
        <div className={twMerge("container px-4 md:px-6")}>
          <div
            className={twMerge(
              "flex flex-col items-center space-y-4 text-center"
            )}
          >
            <Image
              alt="Developer"
              className={twMerge("rounded-full aspect-square object-cover")}
              height={200}
              src={Teste}
              width={200}
            />
            <h1
              className={twMerge(
                "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
              )}
            >
              Sobre mim
            </h1>
            <p
              className={twMerge(
                "max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              )}
            >
              Profissional especializado em desenvolvimento Front-End Web. No
              mercado há mais de 3 anos, familiarizado com React, TypeScript,
              JavaScript, Tailwind e Next, com habilidades em MySQL, PostgreSQL.
              Prático em testes com Jest e Vitest. Bacharelado em Ciênica da
              Computação pela Unisagrado.
            </p>
          </div>
          <div
            className={twMerge("gap-2 p-1 flex justify-center items-center")}
          >
            <Button text="Download CV" onClick={handleProfile} />
            <Button text="Contatos" onClick={handleContact} />
          </div>
        </div>
      </section>

      <section
        className={twMerge(
          "w-full py-12 md:py-24 lg:py-32 justify-center flex"
        )}
        id="skills"
      >
        <div className={twMerge("container px-4 md:px-6 w-[90%]")}>
          <h2
            className={twMerge(
              "text-3xl font-bold tracking-tighter sm:text-5xl"
            )}
          >
            Habilidades
          </h2>
          <div
            className={twMerge(
              "grid gap-6 md:grid-cols-2 lg:grid-cols-8 mx-auto mt-8"
            )}
          >
            <CardSkills skils={SkillsDev} />
          </div>
        </div>
      </section>

      <section
        className={twMerge(
          "w-full py-12 md:py-24 lg:py-32 justify-center flex"
        )}
        id="projects"
      >
        <div className={twMerge("container px-4 md:px-6 w-[90%]")}>
          <h2
            className={twMerge(
              "text-3xl font-bold tracking-tighter sm:text-5xl"
            )}
          >
            Projetos
          </h2>
          <div className={twMerge("grid gap-4 grid-cols-3 mt-8")}>
            <CardProjects projects={Projects} />
          </div>
        </div>
      </section>

      <Footer />
      {isOpen && <ModalContact onClose={handleClose} />}
    </Layout>
  );
}
