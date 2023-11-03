import ProjectCard from "@/components/card";
import Layout from "@/components/layout";
import gif from "../assets/loading.gif";

export default function Formacoes() {
  const projects = [
    {
      imageUrl: gif,
      description: "Despensa Saudavel",
      onClick: () => undefined,
    },
    {
      imageUrl: gif,
      description: "Descrição do Projeto 1",
      onClick: () => undefined,
    },
    {
      imageUrl: gif,
      description: "Descrição do Projeto 1",
      onClick: () => undefined,
    },
    {
      imageUrl: gif,
      description: "Descrição do Projeto 1",
      onClick: () => undefined,
    },
    {
      imageUrl: gif,
      description: "Descrição do Projeto 1",
      onClick: () => undefined,
    },
    {
      imageUrl: gif,
      description: "Descrição do Projeto 1",
      onClick: () => undefined,
    },
  ];

  return (
    <Layout subTitle=" " title="Formações academicas e Certificados">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
