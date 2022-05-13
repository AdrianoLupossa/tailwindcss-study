import React, { useState } from "react";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ ...otherProps }) => {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!active);
  };

  return (
    <header className="App-header bg-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
        <div className="w-14">
          <img src={logo} alt="Tailwind Logo" className="w-full" />
        </div>

        <div
          className={`
          md:hidden uppercase
          cursor-pointer
        `}
          onClick={handleMenu}
        >
          Menu
        </div>
        <nav
          className={`
            ${!active && "hidden"}
             absolute flex flex-col bg-white top-full w-full left-0 z-20
             md:static md:w-auto md:flex
            `}
        >
          <ul className="flex flex-col md:flex-row">
            <li className="list-none md:mr-5">
              <Link
                to="#!"
                className="flex w-full text-base uppercase hover:text-teal-600 cursor-pointer
                  pt-2.5 px-2.5
                "
              >
                Home
              </Link>
            </li>
            <li className="list-none md:mr-5">
              <Link
                to="#!"
                className="flex w-full text-base uppercase hover:text-teal-600 cursor-pointer
                  pt-2.5 px-2.5
                "
              >
                About
              </Link>
            </li>
            <li className="list-none md:mr-5">
              <Link
                to="#!"
                className="flex w-full text-base uppercase hover:text-teal-600 cursor-pointer
                  pt-2.5 px-2.5
                "
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
