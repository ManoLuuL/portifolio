import { ReactNode } from "react";

export type ButtonProps = {
  text: string;
  className?: string;
  onClick(): void;
  icon?: ReactNode;
};
