import React from "react";
import Input from "components/home/input/Input";

const RegisterForm = props => (
  <form onSubmit={e => props.onSubmit(e, props.register)}>
    <label htmlFor="reg-id">아이디</label>
    <Input
      type="text"
      id="reg-id"
      name="id"
      onChange={props.handleChange}
      value={props.user.id}
    />
    <br />
    <label htmlFor="reg-pwd">비밀번호</label>
    <Input
      type="password"
      id="reg-pwd"
      name="pwd"
      onChange={props.handleChange}
      value={props.user.pwd}
    />
    <br />
    <label htmlFor="reg-pwdCheck">비밀번호확인</label>
    <Input
      type="password"
      id="reg-pwdCheck"
      name="pwdCheck"
      onChange={props.handleChange}
      value={props.user.pwdCheck}
    />
    <br />
    <label htmlFor="reg-name">이름</label>
    <Input
      type="text"
      id="reg-name"
      name="name"
      onChange={props.handleChange}
      value={props.user.name}
    />
    <br />
    <button className="reg-submit" type="submit">
      가입하기
    </button>
  </form>
);

export default RegisterForm;
