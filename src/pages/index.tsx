import { ContactPage, Footer } from "@/components";

import { CardProjects } from "@/components/card-projects";
import CardSkills from "@/components/card-skills/card-skills";
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
              Luis Ricardo C. Couto
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Full-stack developer with a passion for creating high-performance
              web applications.
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-600 justify-center flex"
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

      <section className="pb-5 flex justify-center mt-10 mb-20">
        <div className="flex flex-col items-center w-[90%]">
          <h2 className="font-semibold mb-14 text-gray-600 dark:text-gray-200 text-3xl">
            Projetos
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <CardProjects />
          </div>
        </div>
      </section>
      <ContactPage />
      <Footer />
    </Layout>
  );
}
