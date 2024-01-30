import { ICONS } from "./consts";
import Link from "next/link";
import { SocialsProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Socials = (props: SocialsProps) => {
  const { containerClassName, iconClasseName } = props;

  return (
    <div className={twMerge(containerClassName)}>
      {ICONS.map((icon, index) => {
        return (
          <Link key={index} href={icon.path}>
            <div className={twMerge(iconClasseName)}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};
