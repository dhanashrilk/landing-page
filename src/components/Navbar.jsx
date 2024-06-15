import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function LoginClick() {
    navigate("login");
  }
  return (
    <nav className="flex justify-between mx-auto text-white flex-wrap md:flex-row items-center p-5">
      <div
        className="text-xl items-center flex-shrink-0 lg:mr-12 font-bold"
        href="/"
      >
        trakor
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white hover:text-aivory-500"
        >
          <FaBars className={`fill-current  ${isOpen ? "hidden" : "block"}`} />
          <RiCloseLargeFill
            className={`fill-current  ${isOpen ? "block" : "hidden"}`}
          />
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-md md:flex md:justify-center lg:flex-grow md:me-py-3 lg:ms-auto">
          <a
            href="#"
            className="block py-3 lg:py-0 md:flex lg:flex lg:mt-0 mr-4"
          >
            Product
          </a>
          <a
            href="#"
            className="block py-3 md:flex lg:py-0 lg:flex lg:mt-0 mr-4"
          >
            Solutions
          </a>
          <a
            href="#"
            className="block py-3 md:flex lg:py-0 lg:flex lg:mt-0 mr-4"
          >
            Documentation
          </a>
          <a
            href="#"
            className="block py-3 lg:py-0 md:flex lg:iniline-flex lg:mt-0 mr-4"
          >
            Pricing
          </a>
        </div>
        <button
          onClick={LoginClick}
          className="block items-center lg:inline-block lg:mt-0 mr-2"
        >
          Login
        </button>
        <button className="block mt-4 items-center requestdemo lg:inline-block lg:mt-0 bg-[#334155] px-8 py-3 rounded lg:mx-2">
          Request more info
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
