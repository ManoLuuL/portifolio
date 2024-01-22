export const Footer = () => {
  return (
    <>
      <footer className="flex items-center h-16 px-4 border-t shrink-0 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Luis Ricardo C. Couto. All rights reserved.
        </p>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/* <Link className="text-xs hover:underline underline-offset-4" href="#">
            GitHub
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            LinkedIn
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Twitter
          </Link> */}
        </nav>
      </footer>
    </>
  );
};
