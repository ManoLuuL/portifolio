import { ContatoPage } from "./contato";
import Layout from "@/components/layout";
import SkillCard from "@/components/card";
import { skillTeste } from "@/globals/consts";

export default function Home() {
  return (
    <Layout>
      <section className="pb-5 flex justify-center mt-10 mb-20">
        <div className="flex flex-col items-center w-[90%]">
          <h2 className="font-semibold mb-14 text-gray-600 dark:text-gray-200 text-3xl">
            Sobre
          </h2>
        </div>
      </section>

      <section className="pb-5 flex justify-center mt-10 mb-20">
        <div className="flex flex-col items-center w-[90%]">
          <h2 className="font-semibold mb-14 text-gray-600 dark:text-gray-200 text-3xl">
            Habilidades
          </h2>
          <div className="flex items-center gap-20 flex-wrap">
            <SkillCard skils={skillTeste} />
          </div>
        </div>
      </section>
      <section className="pb-5 flex justify-center mt-10 mb-20">
        <div className="flex flex-col items-center w-[90%]">
          <h2 className="font-semibold mb-14 text-gray-600 dark:text-gray-200 text-3xl">
            Projetos
          </h2>
        </div>
      </section>
      <ContatoPage />
    </Layout>
  );
}
