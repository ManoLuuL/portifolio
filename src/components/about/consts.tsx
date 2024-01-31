import { GraduationCap, MailIcon, PhoneCall, User2 } from "lucide-react";

import { QualificationDataParams } from "./types";

export const INFO_DATA = [
  {
    icon: <User2 size={20} />,
    text: "Luis Ricardo C. Couto",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+55 14 996695188",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ticocouto_14@hotmail.com",
  },

  {
    icon: <GraduationCap size={20} />,
    text: "Bacharelado em Ciência da Computação",
  },
];

export const QUALIFICATION_DATA: QualificationDataParams[] = [
  {
    title: "Educações",
    data: [
      {
        university: "Unisagrado",
        qualification: "Bacharelado em Ciência da Computação",
        years: "2020 - 2023",
      },
    ],
  },
  {
    title: "Certificações",
    data: [
      {
        university: "Udemy",
        qualification: "Next.js e React - Curso Completo",
        years: "2023",
      },
    ],
  },
  {
    title: "Experiencias",
    data: [
      {
        company: "FRG Gestão Inteligente",
        qualification: "Desenvolvedor Front-End",
        years: "Mai de 2022 - Presente",
      },
      {
        company: "FRG Gestão Inteligente",
        qualification: "Desenvolvedor Front-End - Estágio",
        years: "Jan de 2022 - Abr de 2022",
      },
      {
        company: "FRG Gestão Inteligente",
        qualification: "Suporte ao cliente - Estágio",
        years: "Abr de 2021 - Dez de 2021",
      },
      {
        company: "Recanto do Artesanato (Autônomo)",
        qualification: "Proprietário",
        years: "Jul de 2020 - Abr de 2022",
      },
    ],
  },
];
