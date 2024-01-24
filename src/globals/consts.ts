import {
  DespensaSaudavel,
  MiniRPG,
  SistemaTask,
  TemplateADM,
  TriagemVirtual,
} from "../assets";
import {
  IconCSS,
  IconCSharp,
  IconHMTL,
  IconJavaScript,
  IconMySQL,
  IconNextJS,
  IconPostgres,
  IconPython,
  IconReact,
  IconReactQuery,
  IconReactTestingLibrary,
  IconRedux,
  IconTailWind,
  IconTypeScript,
} from "@/components/icons";
import { ProjectProps, SkillItensProps } from "@/components";

export const SkillsDev: SkillItensProps[] = [
  {
    description: "HTML5",
    icon: IconHMTL(),
  },
  {
    description: "React.js",
    icon: IconReact(),
  },
  {
    description: "TypeScript",
    icon: IconTypeScript(),
  },
  {
    description: "JavaScript",
    icon: IconJavaScript(),
  },
  {
    description: "Next.js",
    icon: IconNextJS(),
  },
  {
    description: "CSS",
    icon: IconCSS(),
  },
  {
    description: "Tailwind CSS",
    icon: IconTailWind(),
  },
  {
    description: "Redux",
    icon: IconRedux(),
  },
  {
    description: "React Query",
    icon: IconReactQuery(),
  },
  {
    description: "React Testing",
    icon: IconReactTestingLibrary(),
  },
  {
    description: "MySQL",
    icon: IconMySQL(),
  },
  {
    description: "Postgres",
    icon: IconPostgres(),
  },
  {
    description: "Python",
    icon: IconPython(),
  },
];

export const Projects: ProjectProps[] = [
  {
    title: "Dispensa Saudavel",
    src: DespensaSaudavel,
    icons: [IconTypeScript(30), IconPostgres(30), IconPython(30)],
    link: "https://despensa-saudavel.vercel.app/",
    situation: "Concluido - 23/11/23",
  },
  {
    title: "Mini RPG 2D",
    src: MiniRPG,
    icons: [IconTypeScript(30), IconReact(30)],
    situation: "Desenvolvimento",
    link: "https://github.com/ManoLuuL/MiniRpg2D",
  },
  {
    title: "Sistema de Tarefas",
    src: SistemaTask,
    icons: [IconJavaScript(30), IconReact(30)],
    link: "https://github.com/ManoLuuL/SistemaDeTask",
    situation: "Concluido - 17/04/22",
  },
  {
    title: "Template ERP",
    src: TemplateADM,
    icons: [IconTypeScript(30), IconReact(30), IconNextJS(30)],
    situation: "Concluido - 02/11/23",
    link: "https://github.com/ManoLuuL/template-admin",
  },
  {
    title: "Triagem Virtual",
    src: TriagemVirtual,
    icons: [IconCSharp(30)],
    situation: "Concluido - 04/11/21",
    link: "https://github.com/ManoLuuL/Triagem_Virtual",
  },
];
