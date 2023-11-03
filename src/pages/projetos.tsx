import ProjectCard from "@/components/card";
import Layout from "@/components/layout";
import gif from "../assets/loading.gif";

export default function Projetos() {
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
    <Layout
      subTitle="Desenvolvidos ao longo das minhas experiencias"
      title="Projetos"
    >
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
