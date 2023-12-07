import Layout from "@/components/layout";
import SkillCard from "@/components/card";
import { skillTeste } from "@/globals/consts";

export default function Home() {
  return (
    <Layout>
      <section className="pb-5 flex justify-center items-center">Sobre</section>

      <section className="pb-5 flex justify-center">
        <div className="flex flex-col items-center w-[90%]">
          <h2>Habilidades</h2>
          <div className="flex items-center gap-20 flex-wrap">
            <SkillCard skils={skillTeste} />
          </div>
        </div>
      </section>
      <section className="pb-5">Projetos</section>
      <section className="pb-5">Contatos</section>
    </Layout>
  );
}
