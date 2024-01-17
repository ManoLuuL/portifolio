import { CardContact } from "@/components/card-contact";
import Mail from "../assets/mail.png";

export const ContactPage = () => {
  return (
    <section className="pb-5 flex justify-center mt-10 mb-60">
      <div className="mt-12 block w-full items-center">
        <div className="flex flex-col items-center">
          <h2 className="font-semibold mb-14 text-gray-600 dark:text-gray-200 text-3xl">
            Contato
          </h2>
          <div className="flex flex-wrap  justify-center gap-20">
            <CardContact
              image={Mail}
              subTitle="ticocouto_14@hotmail.com"
              title="E-mail"
              link="mailto:ticocouto_14@hotmail.com"
            />
            <CardContact
              image={Mail}
              subTitle="(14) 99999-9999"
              title="Telefone"
              link="mailto:ticocouto_14@hotmail.com"
            />
            <CardContact
              image={Mail}
              subTitle="Manoluul"
              title="Linkedin"
              link="https://www.linkedin.com/in/luis-ricardo-coelho-couto-26ba151b4/"
            />
            <CardContact
              image={Mail}
              subTitle="@luisricardocouto"
              title="Github"
              link="https://github.com/ManoLuuL"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
