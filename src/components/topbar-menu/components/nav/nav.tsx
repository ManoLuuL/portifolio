import { Link } from "react-scroll";
import { links } from "./consts";
import { twMerge } from "tailwind-merge";

export const Nav = () => {
  return (
    <nav className={twMerge("hidden xl:flex gap-x-8 items-center")}>
      {links.map((items, index) => {
        return (
          <Link
            key={index}
            to={items.id}
            smooth={true}
            duration={500}
            className={twMerge(
              "capitalize relative text-gray-500 font-bold tracking-[1px] hover:text-white cursor-pointer",
              "after:content-[''] after:bg-blue-500 after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl",
              "after:absolute after:duration-500 after:hover:w-full"
            )}
          >
            {items.name}
          </Link>
        );
      })}
    </nav>
  );
};
