import React from "react";
import { Link } from "react-router-dom";
import "css/components/main/Header.css";

const Header = props => (
  <header className="main-header">
    <Link to="/">
      <div className="header-logo" />
    </Link>
    {!props.logged ? (
      <ul className="header-ul">
        <Link to="/home/register">
          <li className="header-li">회원가입</li>
        </Link>
        <Link to="/home/login">
          <li className="header-li">로그인</li>
        </Link>
      </ul>
    ) : (
      <ul className="header-ul">
        <li className="header-li">
          {localStorage.getItem("name")}님 반갑습니다.
        </li>
        <li className="header-li">로그아웃</li>
      </ul>
    )}
  </header>
);

export default Header;
