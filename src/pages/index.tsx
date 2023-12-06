import { IconHMTL, IconReact, IconSun } from "@/components/icons";

import Layout from "@/components/layout";
import SkillCard from "@/components/card";
import { SkillItensProps } from "@/components/card/types";

export default function Home() {
  const skillTeste: SkillItensProps[] = [
    {
      description: "React",
      icon: IconReact,
    },
    {
      description: "HTML",
      icon: IconHMTL,
    },
    {
      description: "Teste 1",
      icon: IconReact,
    },
    {
      description: "Teste 1",
      icon: IconReact,
    },
    {
      description: "Teste 1",
      icon: IconReact,
    },
    {
      description: "Teste 1",
      icon: IconReact,
    },
  ];

  return (
    <Layout>
      <section className="pb-5 flex justify-center items-center">
        Seção A
      </section>
      <section className="pb-5">Seção B</section>
      <section className="pb-5">Seção C</section>
      <section className="pb-5">Seção D</section>
      <section className="pb-5">
        <div className="flex flex-col items-center w-[90%]">
          <h2>SKILLS</h2>
          <div className="flex items-center gap-20 flex-wrap">
            <SkillCard skils={skillTeste} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
