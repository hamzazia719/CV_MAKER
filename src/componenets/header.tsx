import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CV from "../assets/cv-removebg-preview.png";
import ProfileImg from "../assets/cv.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-gray-200 dark:bg-gray-900/50 w-full z-20 top-0 start-0 backdrop-blur-md border-b border-gray-200 dark:border-gray-600 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-gray-200 transition-all duration-300 ease-in-out">
        <Link to="/" className="flex items-center space-x-3">
          <img src={CV} className="h-10" alt="cv logo" />
          <span className="hidden sm:block self-center text-2xl font-bold text-blue-900 dark:text-blue-400">
            CV_MAKER
          </span>
        </Link>

        <div className="relative hidden md:flex md:order-2 space-x-3 rtl:space-x-reverse">
          <img
            src={ProfileImg}
            alt="Profile"
            className="h-10 w-10 rounded-full border-2 border-blue-900 cursor-pointer"
            onClick={handleProfileToggle}
          />

          {isProfileOpen && (
            <div className="absolute right-0 mt-12 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <ul className="py-1 text-gray-700 dark:text-gray-200">
                <li>
                  <Link
                    to="/profile-settings"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={handleToggle}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
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
          className={`items-center justify-between w-full md:flex md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul
            style={{ backgroundColor: "rgb(229 231 235)" }}
            className=" flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:text-blue-900 md:p-0 md:dark:text-blue-400"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:text-blue-900 md:p-0 md:dark:text-blue-400"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/price"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:text-blue-900 md:p-0 md:dark:text-blue-400"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:text-blue-900 md:p-0 md:dark:text-blue-400"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="md:hidden">
              <button
                onClick={handleProfileToggle}
                className="flex items-center space-x-3"
              >
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="hidden sm:block h-10 w-10 rounded-full border-2 border-blue-900"
                />
                <span className="text-gray-900 dark:text-white">Profile</span>
              </button>

              {/* Profile Dropdown for mobile */}
              {isProfileOpen && (
                <ul className="mt-2 py-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                  <li>
                    <Link
                      to="/profile-settings"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Profile Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
