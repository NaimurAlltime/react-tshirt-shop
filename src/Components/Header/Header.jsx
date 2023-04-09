import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-cyan-100">
      <ul className="py-3 mx-12 text-2xl font-normal">
        <Link className="pr-14 hover:text-purple-300" to="/">
          Home
        </Link>
        <Link className="pr-14 hover:text-purple-300" to="/review_order">
          Review Order
        </Link>
        <Link className="pr-14 hover:text-purple-300" to="/about">
          About
        </Link>
        <Link className="pr-14 hover:text-purple-300" to="/contact">
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
