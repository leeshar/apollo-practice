import React from "react";
import { Link } from "react-router-dom";
import "css/components/main/Nav.css";

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/products">
        <li>Book</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
