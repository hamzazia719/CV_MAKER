import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import CV from "../assets/cv-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pb-4 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className=" mb-4 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={CV} alt="Logo" className="w-24 h-auto" />
            </a>
            <p className=" text-blue-900 font-bold text-3xl">CV_MAKER</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 space-y-2 md:space-y-0 md:space-x-4">
            <a
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400"
            >
              About
            </a>
            <a
              href="/price"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
