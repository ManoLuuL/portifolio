import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { text } = props;

  return (
    <button
      className={`m-4 w-44 py-2 px-6 text-lg rounded-md border-2 border-blue-400 bg-gray-200 dark:bg-gray-800 
        dark:text-white cursor-pointer font-bold flex justify-center items-center no-underline transition duration-300
        dark:hover:bg-blue-400 hover:bg-blue-300 text-gray-700`}
    >
      {text}
    </button>
  );
};
