import { Button } from "../button";
import Link from "next/link";

export const Cta = () => {
  return (
    <section className="py-24 bg-gray-300 dark:bg-gray-900/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold max-w-xl text-center mb-8">
            Que tal tornar aquelas ideias em realidade? Eu posso te ajudar.
          </h2>
          <Link href={"/"}>
            <Button onClick={() => undefined} text="Me Contate" />
          </Link>
        </div>
      </div>
    </section>
  );
};
