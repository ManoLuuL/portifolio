import { ReactElement } from "react";
import { StaticImageData } from "next/image";

export type ProjectProps = {
  title: string;
  src: StaticImageData;
  icons: ReactElement<{ size: number }>[];
  link?: string;
  situation: string;
};

export type CardProjectsProps = {
  projects: ProjectProps[];
};
