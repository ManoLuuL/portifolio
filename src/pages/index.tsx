import Image from "next/image";
import Layout from "@/components/layout";
import Mail from "../assets/mail.png";
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
      <section className="pb-5 flex justify-center mt-10 mb-60">
        <div className="mt-12 block">
          <div className="flex flex-col items-center w-[90%]">
            <h2 className="font-semibold mb-14 text-gray-600 dark:text-gray-200 text-3xl">
              Contato
            </h2>
            <div className="flex flex-wrap gap-14 justify-center">
              <div className="flex flex-col items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
                <a
                  href="mailto:ticocouto_14@hotmail.com"
                  target="_blank"
                  className="mb-4 w-fit "
                >
                  <div className="flex justify-center items-center bg-gray-500 dark:bg-gray-700 rounded-full h-24 w-24">
                    <Image alt="email" src={Mail} className="p-4 " />
                  </div>
                </a>
                <a
                  href="mailto:ticocouto_14@hotmail.com"
                  target="_blank"
                  className="mb-4 w-fit"
                >
                  <p className="font-bold text-gray-600 dark:text-gray-100 text-2xl">
                    E-mail
                  </p>
                </a>
                <a
                  href="mailto:ticocouto_14@hotmail.com"
                  target="_blank"
                  className="w-fit"
                >
                  <p className="font-bold text-gray-600 dark:text-gray-300 text-lg">
                    ticocouto_14@hotmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
