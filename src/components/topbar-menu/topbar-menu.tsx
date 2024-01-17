import useAppData from "@/globals/hooks/use-app-data";

const TopBar = () => {
  const { changeTheme } = useAppData();

  return (
    <section
      style={{
        gridArea: "topbar",
      }}
      className={`flex items-center justify-center overflow-hidden w-full h-full overflow-x-auto overflow-y-auto z-[1]
      bg-gray-800 border-b-2 border-blue-400 dark:border-blue-400 border-solid px-3`}
    >
      <div className="grid-cols-12 grid gap-4 p-1 w-full">
        <div className="col-span-2" />
        <div className="text-2xl dark:text-gray-200 text-gray-200 font-bold col-span-8 flex items-center justify-center">
          Portifolio
        </div>
        <div className="col-span-2 flex justify-end">
          <button
            className={`whitespace-nowrap rounded-md text-sm font-medium ring-offset-background
        transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-gray-800 hover:bg-gray-500`}
            onClick={changeTheme}
          >
            🌓
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
