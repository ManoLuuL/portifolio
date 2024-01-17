import { StaticImageData } from "next/image";

export type CardContactProps = {
  image: StaticImageData;
  title: string;
  subTitle: string;
  link?: string;
};
