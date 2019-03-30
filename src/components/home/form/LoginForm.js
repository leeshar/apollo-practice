import React from "react";
import Input from "components/home/input/Input";

const LoginForm = props => (
  <div className="login">
    <h3>Login</h3>
    <label>아이디</label>
    <Input type="text" onChange={props.handleChange} name="id" />
    <label>비밀번호</label>
    <Input type="password" onChange={props.handleChange} name="pwd" />
    <button onClick={e => props.getLogin(e, props.login)}>로그인</button>
  </div>
);

export default LoginForm;
