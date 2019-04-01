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
        <li>책방</li>
      </Link>
      <Link to="/community">
        <li>커뮤니티</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
