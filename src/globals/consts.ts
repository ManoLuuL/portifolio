import {
  IconCSS,
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

import DispensaSaudavel from "../assets/Screenshot_2.png";

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
    src: DispensaSaudavel,
    icons: [IconTypeScript(30), IconPostgres(30), IconPython(30)],
    link: "https://despensa-saudavel.vercel.app/",
    situation: "Concluido - 23/11/23",
  },
];
