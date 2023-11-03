import { FC } from "react";
import { TopbarMenuProps } from "./types";
import Title from "../title";

const TopbarMenu: FC<TopbarMenuProps> = (props) => {
  const { subTitle, title } = props;

  return (
    <div className="flex border-b-2">
      <Title subTitle={subTitle} title={title} />
    </div>
  );
};

export default TopbarMenu;
