import React, { Component } from "react";
import Form from "components/home/form/RegisterForm";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const NEW_USER = gql`
  mutation register($id: String!, $pwd: String!, $name: String!) {
    register(id: $id, pwd: $pwd, name: $name) {
      id
      pwd
      name
    }
  }
`;

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "",
        pwd: "",
        pwdCheck: "",
        name: ""
      }
    };
  }
  handleChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };
  onSubmit = async (e, register) => {
    {
      await e.preventDefault();
      const { id, pwd, name } = await this.state.user;
      await register({
        variables: {
          id,
          pwd,
          name
        }
      });
      await this.setState({
        id: "",
        pwd: "",
        pwdCheck: "",
        name: ""
      });
      window.location.href = await "/home/welcome";
    }
  };
  render() {
    const { user } = this.state;
    return (
      <div className="register">
        <h1>회원가입</h1>
        <div className="register-box">
          <Mutation mutation={NEW_USER}>
            {(register, { data }) => (
              <Form
                user={user}
                onSubmit={this.onSubmit}
                handleChange={this.handleChange}
                register={register}
              />
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}
