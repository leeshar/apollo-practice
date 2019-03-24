import React from "react";
import "css/components/main/Header.css";

const Header = props => (
  <header className="main-header">
    {!props.logged ? (
      <ul className="header-ul">
        <li className="header-li">회원가입</li>
        <li className="header-li">로그인</li>
      </ul>
    ) : (
      <ul className="header-ul">
        <li className="header-li">{props.name}님 반갑습니다.</li>
        <li className="header-li">로그아웃</li>
      </ul>
    )}
  </header>
);

export default Header;
