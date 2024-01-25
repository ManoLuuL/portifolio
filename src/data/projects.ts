import {
  DespensaSaudavel,
  MiniRPG,
  ShopOnline,
  SistemaTask,
  TemplateADM,
  TriagemVirtual,
} from "@/assets";
import {
  IconCSharp,
  IconJavaScript,
  IconNextJS,
  IconPostgres,
  IconPython,
  IconReact,
  IconTypeScript,
  ProjectProps,
} from "@/components";

export const Projects: ProjectProps[] = [
  {
    title: "Dispensa Saudavel",
    src: DespensaSaudavel,
    icons: [IconTypeScript(30), IconPostgres(30), IconPython(30)],
    link: "https://despensa-saudavel.vercel.app/",
    situation: "Concluido - 05/12/23",
  },
  {
    title: "Mini RPG 2D",
    src: MiniRPG,
    icons: [IconTypeScript(30), IconReact(30)],
    situation: "Em desenvolvimento",
    link: "https://github.com/ManoLuuL/MiniRpg2D",
  },
  {
    title: "Sistema de Tarefas",
    src: SistemaTask,
    icons: [IconJavaScript(30), IconReact(30)],
    link: "https://github.com/ManoLuuL/SistemaDeTask",
    situation: "Concluido - 15/10/22",
  },
  {
    title: "Template ERP",
    src: TemplateADM,
    icons: [IconTypeScript(30), IconReact(30), IconNextJS(30)],
    situation: "Concluido - 06/10/23",
    link: "https://github.com/ManoLuuL/template-admin",
  },
  {
    title: "Triagem Virtual",
    src: TriagemVirtual,
    icons: [IconCSharp(30)],
    situation: "Concluido - 04/11/21",
    link: "https://github.com/ManoLuuL/Triagem_Virtual",
  },
  {
    title: "Shop Online",
    src: ShopOnline,
    icons: [IconTypeScript(30), IconReact(30)],
    situation: "Em Desenvolvimento",
    link: "https://github.com/ManoLuuL/shop-online",
  },
];
