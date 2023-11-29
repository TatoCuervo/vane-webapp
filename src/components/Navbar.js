import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mt-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          <Link to="/">Vanessa Arranz</Link>
        </span>
        <button
          onClick={toggleOpen}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-2 focus:ring-2 focus:ring-gray-400"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={(isOpen ? "" : "hidden") + " md:block w-full md:w-auto"}
        >
          <ul className="font-medium flex flex-col bg-transparent p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="block py-2 px-3 group text-white transition duration-300 md:border-0 md:p-0">
              <Link to="/about" onClick={toggleOpen}>
                About me
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </Link>
            </li>
            <li className="block py-2 px-3 group text-white transition duration-300 md:border-0 md:p-0">
              <Link to="/publications" onClick={toggleOpen}>
                Publications
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </Link>
            </li>
            <li className="block py-2 px-3 group text-white transition duration-300 md:border-0 md:p-0">
              <Link to="/research" onClick={toggleOpen}>
                Research
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </Link>
            </li>
            <li className="block py-2 px-3 group text-white transition duration-300 md:border-0 md:p-0">
              <Link to="/contact" onClick={toggleOpen}>
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
