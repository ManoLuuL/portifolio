import { FC } from "react";
import Image from "next/image";
import Mail from "../assets/mail.png";

export const ContatoPage: FC = () => {
  return (
    <section className="pb-5 flex justify-center mt-10 mb-60">
      <div className="mt-12 block w-full items-center">
        <div className="flex flex-col items-center">
          <h2 className="font-semibold mb-14 text-gray-600 dark:text-gray-200 text-3xl">
            Contato
          </h2>
          <div className="flex flex-wrap  justify-center gap-20">
            <div className="flex flex-col items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110 ">
              <a
                href="mailto:ticocouto_14@hotmail.com"
                target="_blank"
                className="mb-4 w-fit "
              >
                <div className="flex justify-center items-center bg-gray-500 dark:bg-gray-700 rounded-full h-24 w-24">
                  <Image alt="email" src={Mail} className="p-4 " />
                </div>
              </a>
              <a
                href="mailto:ticocouto_14@hotmail.com"
                target="_blank"
                className="mb-4 w-fit"
              >
                <p className="font-bold text-gray-600 dark:text-gray-100 text-2xl">
                  E-mail
                </p>
              </a>
              <a
                href="mailto:ticocouto_14@hotmail.com"
                target="_blank"
                className="w-fit"
              >
                <p className="font-bold text-gray-600 dark:text-gray-300 text-lg">
                  ticocouto_14@hotmail.com
                </p>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110 ">
              <a href="zap" target="_blank" className="mb-4 w-fit ">
                <div className="flex justify-center items-center bg-gray-500 dark:bg-gray-700 rounded-full h-24 w-24">
                  <Image alt="email" src={Mail} className="p-4" />
                </div>
              </a>
              <a href="zap" target="_blank" className="mb-4 w-fit">
                <p className="font-bold text-gray-600 dark:text-gray-100 text-2xl">
                  Telefone
                </p>
              </a>
              <a
                href="mailto:ticocouto_14@hotmail.com"
                target="_blank"
                className="w-fit"
              >
                <p className="font-bold text-gray-600 dark:text-gray-300 text-lg">
                  {"(14) 99999-9999"}
                </p>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110 ">
              <a
                href="https://www.linkedin.com/in/luis-ricardo-coelho-couto-26ba151b4/"
                target="_blank"
                className="mb-4 w-fit "
              >
                <div className="flex justify-center items-center bg-gray-500 dark:bg-gray-700 rounded-full h-24 w-24">
                  <Image alt="email" src={Mail} className="p-4 " />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/luis-ricardo-coelho-couto-26ba151b4/"
                target="_blank"
                className="mb-4 w-fit"
              >
                <p className="font-bold text-gray-600 dark:text-gray-100 text-2xl">
                  Linkedin
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/luis-ricardo-coelho-couto-26ba151b4/"
                target="_blank"
                className="w-fit"
              >
                <p className="font-bold text-gray-600 dark:text-gray-300 text-lg">
                  @luisricardocouto
                </p>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
              <a
                href="https://github.com/ManoLuuL"
                target="_blank"
                className="mb-4 w-fit "
              >
                <div className="flex justify-center items-center bg-gray-500 dark:bg-gray-700 rounded-full h-24 w-24">
                  <Image alt="email" src={Mail} className="p-4 " />
                </div>
              </a>
              <a
                href="https://github.com/ManoLuuL"
                target="_blank"
                className="mb-4 w-fit"
              >
                <p className="font-bold text-gray-600 dark:text-gray-100 text-2xl">
                  Github
                </p>
              </a>
              <a
                href="https://github.com/ManoLuuL"
                target="_blank"
                className="w-fit"
              >
                <p className="font-bold text-gray-600 dark:text-gray-300 text-lg">
                  @manoluul
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
