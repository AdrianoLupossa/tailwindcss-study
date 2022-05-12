import React from "react";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ ...otherProps }) => {
  return (
    <header className="App-header bg-red-700">
      <div className="max-w-xs">
        <img src={logo} alt="Tailwind Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="#!">Home</Link>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </nav>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </header>
  );
};

export default Header;
