import { Button } from "../button";
import { Modal } from "../modal";
import { ModalContactProps } from "./types";
import { twMerge } from "tailwind-merge";

export const ModalContact = (props: ModalContactProps) => {
  const { onClose } = props;

  return (
    <>
      <Modal onClose={onClose} title="Contatos">
        <div className={twMerge("flex justify-center")}>
          <Button
            text="Linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/luis-ricardo-coelho-couto-26ba151b4/",
                "_blank"
              )
            }
          />
          <Button
            text="Github"
            onClick={() => window.open("https://github.com/ManoLuuL", "_blank")}
          />
        </div>
      </Modal>
    </>
  );
};
