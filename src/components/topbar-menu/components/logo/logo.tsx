import Image from "next/image";
import { Link } from "react-scroll";
import { LogoMenu } from "@/assets";

export const Logo = () => {
  return (
    <Link
      to="main"
      className="rounded-full w-10 h-10 flex justify-center items-center cursor-pointer bg-gray-300 dark:bg-gray-800 transition-all duration-500"
      smooth={true}
      duration={500}
    >
      <Image alt="" src={LogoMenu} />
    </Link>
  );
};
