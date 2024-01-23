import { ModalProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Modal = (props: ModalProps) => {
  const { children, onClose } = props;

  return (
    <>
      <div className={twMerge("fixed inset-0 overflow-y-auto", "z-50")}>
        <div
          className={twMerge(
            "flex items-center justify-center",
            "min-h-screen"
          )}
        >
          <div className={twMerge("fixed inset-0 bg-gray-900 opacity-70")} />
          <div className="relative z-50 bg-gray-200 dark:bg-gray-800 p-4 max-w-lg w-full rounded-md">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400"
              >
                X
              </button>
            </div>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
