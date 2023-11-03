import { FC } from "react";
import { ProjectCardProps } from "./types";
import Image from "next/image";

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { description, imageUrl, onClick } = props;

  return (
    <div
      className="flex flex-col items-center justify-center project-card border-2 cursor-pointer h-50 w-80"
      onClick={onClick}
    >
      <Image className="mb-2 h-28 w-70" src={imageUrl} alt="Project Image" />
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
