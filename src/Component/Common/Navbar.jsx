import React from "react";
import { useState } from "react";
import { matchPath, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  //change Color when scrolling
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <main>
      <header className="bg-gray-900 fixed text-white p-4 w-full z-10 mb-2">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18C3 18.6 3.4 19 4 19C4.6 19 5 18.6 5 18C5 17.4 4.6 17 4 17C3.4 17 3 17.4 3 18zM8 18C8 18.6 8.4 19 9 19C9.6 19 10 18.6 10 18C10 17.4 9.6 17 9 17C8.4 17 8 17.4 8 18zM16 18C16 18.6 16.4 19 17 19C17.6 19 18 18.6 18 18C18 17.4 17.6 17 17 17C16.4 17 16 17.4 16 18zM20 18C20 18.6 20.4 19 21 19C21.6 19 22 18.6 22 18C22 17.4 21.6 17 21 17C20.4 17 20 17.4 20 18zM3 12C3 12.6 3.4 13 4 13C4.6 13 5 12.6 5 12C5 11.4 4.6 11 4 11C3.4 11 3 11.4 3 12zM8 12C8 12.6 8.4 13 9 13C9.6 13 10 12.6 10 12C10 11.4 9.6 11 9 11C8.4 11 8 11.4 8 12zM16 12C16 12.6 16.4 13 17 13C17.6 13 18 12.6 18 12C18 11.4 17.6 11 17 11C16.4 11 16 11.4 16 12zM20 12C20 12.6 20.4 13 21 13C21.6 13 22 12.6 22 12C22 11.4 21.6 11 21 11C20.4 11 20 11.4 20 12zM3 6C3 6.6 3.4 7 4 7C4.6 7 5 6.6 5 6C5 5.4 4.6 5 4 5C3.4 5 3 5.4 3 6zM8 6C8 6.6 8.4 7 9 7C9.6 7 10 6.6 10 6C10 5.4 9.6 5 9 5C8.4 5 8 5.4 8 6zM16 6C16 6.6 16.4 7 17 7C17.6 7 18 6.6 18 6C18 5.4 17.6 5 17 5C16.4 5 16 5.4 16 6zM20 6C20 6.6 20.4 7 21 7C21.6 7 22 6.6 22 6C22 5.4 21.6 5 21 5C20.4 5 20 5.4 20 6z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 2C0 1.44772 0.447715 1 1 1C1.55228 1 2 1.44772 2 2C2 2.55228 1.55228 3 1 3C0.447716 3 0 2.55228 0 2zM22 2C22 1.44772 22.4477 1 23 1C23.5523 1 24 1.44772 24 2C24 2.55228 23.5523 3 23 3C22.4477 3 22 2.55228 22 2zM12 2C12 1.44772 12.4477 1 13 1C13.5523 1 14 1.44772 14 2C14 2.55228 13.5523 3 13 3C12.4477 3 12 2.55228 12 2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Responsive Navbar */}
        <nav
          className={`lg:flex lg:items-center lg:w-auto gap-x-4  justify-center  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Add your navigation links here */}
          <a
            href="/"
            className={`${
              matchRoute("/") ? "text-yellow-500" : ""
            } block active mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`${
              matchRoute("/about") ? "text-yellow-500" : ""
            } block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4`}
          >
            About
          </a>
          <a
            href="/project"
            className={`${
              matchRoute("/project") ? "text-yellow-500" : ""
            } block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4`}
          >
            Projects
          </a>
          <a
            href="/contact"
            className={` ${
              matchRoute("/contact") ? "text-yellow-500" : ""
            } block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400`}
          >
            Contact
          </a>
        </nav>
      </header>
    </main>
  );
};

export default Navbar;
