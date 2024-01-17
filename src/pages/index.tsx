import CardSkills from "@/components/card-skills/card-skills";
import { ContactPage } from "@/components";
import Layout from "@/components/layout";
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
          <div className="flex items-center gap-20 flex-wrap justify-center">
            <CardSkills skils={skillTeste} />
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
      <ContactPage />
    </Layout>
  );
}
