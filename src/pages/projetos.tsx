import Layout from "@/components/layout";
import ProjectCard from "@/components/card";
import adm from "../assets/amd.jpg";
import img from "../assets/despensa.png";
import mini from "../assets/mini.jpg";

export default function Projetos() {
  const projects = [
    {
      imageUrl: img,
      description: "Despensa Saudavel",
      onClick: () => undefined,
    },
    {
      imageUrl: adm,
      description: "Template-Admin",
      onClick: () => undefined,
    },
    {
      imageUrl: mini,
      description: "Mini RPG 2D",
      onClick: () => undefined,
    },
  ];

  return (
    <Layout
      subTitle="Desenvolvidos ao longo da minha carreira"
      title="Projetos"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            //@ts-ignore
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
