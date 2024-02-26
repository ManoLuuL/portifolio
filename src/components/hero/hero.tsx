"use client";

import { Badge, Socials } from "./components";
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiDownload2Fill,
  RiSendPlaneFill,
} from "react-icons/ri";

import { Button } from "../button";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { Profile } from "@/assets";
import { twMerge } from "tailwind-merge";

export const Hero = () => {
  const handleProfile = () => {
    const profile = "/assets/Profile.pdf";
    const link = document.createElement("a");
    link.href = profile;
    link.download = "Currículo";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 xl:py-24 h-screen xl:pt-28" id="main">
      <div className="px-20 py-10 mx-auto w-full">
        <div className="flex justify-between gap-x-8">
          <div className="flex  flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-base uppercase font-semibold mb-4 text-gray-600 dark:text-gray-300 tracking-[4px]">
              Desenvolvedor Front-End
            </div>
            <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-4">
              Olá, eu sou o Luis Ricardo
            </h1>
            <p className="text-lg mb-8 font-light max-w-[800px] mx-auto xl:mx-0">
              Programador Front-End em React e Next, em constante evolução.
              Cursando Especialização(Pós-Graduação) em Full Stack para abraçar
              desafios mais amplos. Aqui você podera explorar e junte-se à
              jornada de inovação digital, pois não é apenas um conjunto de
              projetos, mas uma narrativa visual que reflete meu comprometimento
              com a excelência e o constante aprimoramento.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-6">
              <Link href={"mailto:ticocouto_14@hotmail.com"}>
                <Button
                  text="Contato"
                  className="gap-x-2 text-xl h-14"
                  onClick={() => undefined}
                  icon={<RiSendPlaneFill />}
                />
              </Link>
              <Button
                text="Download CV"
                onClick={handleProfile}
                className="gap-x-2 text-xl h-14"
                icon={<RiDownload2Fill />}
              />
            </div>
            <Socials
              containerClassName="flex gap-x-2 mx-auto xl:mx-0"
              iconClasseName="text-[22px] hover:text-gray-200 transition-all bg-gray-100 dark:bg-gray-800 rounded-full h-12 w-12 flex items-center justify-center hover:dark:bg-gray-700 hover:bg-gray-200"
            />
          </div>
          <div className={twMerge("relative hidden xl:flex")}>
            <Badge
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Anos De Experiência"
              containerClassName="absolute top-[75%] left-[16rem]"
              endCountText=""
            />

            <div
              className={twMerge(
                "bg-blue-400 dark:bg-blue-500 rounded-full p-4 absolute -top-1 -right-4 w-40 h-40"
              )}
            />
            <div
              className={twMerge(
                "bg-blue-400 dark:bg-blue-500 rounded-full p-4 absolute bottom-1 -left-20 w-64 h-64"
              )}
            />
            <div
              className={twMerge(
                "relative flex shrink-0 overflow-hidden rounded-full w-96 h-96"
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
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce cursor-pointer">
          <LinkScroll to="about" smooth={true} duration={500}>
            <RiArrowDownSLine className="text-3xl text-gray-400" />
          </LinkScroll>
        </div>
      </div>
    </section>
  );
};
