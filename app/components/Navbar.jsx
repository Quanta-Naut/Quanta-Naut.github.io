"use client";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-gray-200 dark:bg-[#121212] z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center">
          <img src="" className="h-8 mr-3" alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Astrosa
          </span>
        </a>
        <div className="flex md:order-2">
          <a href="https://github.com/Quanta-Naut" target="blank">
            <button
              type="button"
              class="text-white border-pink-600 border-2 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:hover:text-pink-600 transition-colors duration-850"
            >
              GitHub
            </button>
          </a>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 border-purple-600 border-2 dark:hover:text-purple-600 md:hidden ransition-colors duration-850"
          >
            {isMobileMenuOpen ? (
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
                  d="M12 5l-7 7-7-7"
                />
              </svg>
            ) : (
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
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-pink-600 md:p-0 md:dark:text-pink-600 transition-colors duration-850"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 md:dark:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  transition-colors duration-850"
                onClick={() => scrollToElement("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 md:dark:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  transition-colors duration-850"
                onClick={() => scrollToElement("awards")}
              >
                Acheivements
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 md:dark:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  transition-colors duration-850">
                Rocketry
              </a>
            </li>

            <li>
              <a
                className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 md:dark:hover:text-pink-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  transition-colors duration-850"
                onClick={() => scrollToElement("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
