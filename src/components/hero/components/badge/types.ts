import { ReactNode } from "react";

export type BadgeProps = {
  containerClassName: string;
  icon: ReactNode;
  endCountNum: number;
  endCountText: string;
  badgeText: string;
};
