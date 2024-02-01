import { Briefcase, GraduationCap } from "lucide-react";
import { EducationDataParams, ExperienceDataParams } from "./types";
import { INFO_DATA, QUALIFICATION_DATA } from "./consts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import { Profile } from "@/assets";
import { twMerge } from "tailwind-merge";

export const About = () => {
  const getData = (arr: any[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24" id="about">
      <div className="container mx-auto">
        <h2
          className={twMerge(
            "text-4xl font-bold relative w-max flex items-center justify-between gap-x-3",
            "before:bg-dots_light before:dark:bg-dots_dark before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]",
            "mb-8 xl:mb-16 text-center mx-auto"
          )}
        >
          Sobre mim
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <div className="relative w-[505px] h-[505px]">
              <div
                className={twMerge(
                  "bg-blue-400 dark:bg-blue-500 rounded-full p-4 absolute -top-1 left-2 w-40 h-40"
                )}
              />
              <div
                className={twMerge(
                  "bg-blue-400 dark:bg-blue-500 rounded-full p-4 absolute bottom-20 right-24 w-64 h-64"
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
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Informações
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualificações
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="certification"
                >
                  Certificações
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="text-3xl font-bold mb-4">Programador Web</h3>
                    <p className="max-w-xl text-muted-foreground text-lg mb-8 font-light mx-auto xl:mx-0">
                      Familarizado com o ambiente de React e TypeScript,
                      realizando aplicações web em Single-Page Application(SPA)
                      ou aplicações Monolitas, tenho sempre buscado melhorar a
                      forma de desenvolvimento.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {INFO_DATA.map((items, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-blue-500">{items.icon}</div>
                            <div>{items.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-blue-500">
                        Habilidade Linguística
                      </div>
                      <div className="border-b border-gray-500"></div>
                      <div>Inglês, Português</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="text-3xl font-bold mb-8 text-center xl:text-left">
                      Minha Jornada
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-blue-500">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(QUALIFICATION_DATA, "Experiencias").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(QUALIFICATION_DATA, "Experiencias").data.map(
                            (items: ExperienceDataParams, index: number) => {
                              const { company, qualification, years } = items;

                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-9 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-gray-300 relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-blue-500 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-blue-500">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(QUALIFICATION_DATA, "Educações").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(QUALIFICATION_DATA, "Educações").data.map(
                            (items: EducationDataParams, index: number) => {
                              const { qualification, years, university } =
                                items;

                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-9 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-gray-300 relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-blue-500 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="certification">
                  <div>
                    <h3 className="text-3xl font-bold mb-8 text-center xl:text-left">
                      Certificados de Cursos
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-blue-500">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(QUALIFICATION_DATA, "Certificações").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(
                            QUALIFICATION_DATA,
                            "Certificações"
                          ).data.map(
                            (items: EducationDataParams, index: number) => {
                              const { qualification, years, university } =
                                items;

                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-9 group cursor-pointer"
                                  onClick={() =>
                                    window.open(
                                      "https://www.udemy.com/certificate/UC-83293187-13a1-4ea8-9a3d-ac9bcd49ff62",
                                      "_blank"
                                    )
                                  }
                                >
                                  <div className="h-[84px] w-[1px] bg-gray-300 relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-blue-500 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
