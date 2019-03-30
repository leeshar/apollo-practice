import React, { Component } from "react";
import gql from "graphql-tag";
import LoginForm from "components/home/form/LoginForm";
import Loading from "components/loading/Loading";
import { Mutation, ApolloConsumer } from "react-apollo";

const LOGIN_USER = gql`
  mutation login($id: String!, $pwd: String!) {
    login(id: $id, pwd: $pwd) {
      _id
      name
    }
  }
`;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      id: "",
      pwd: ""
    };
  }
  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }
  getLogin = async (e, login) => {
    await e.preventDefault();
    const { id, pwd } = await this.state;

    await login({
      variables: {
        id,
        pwd
      }
    });
    await console.log(login);
  };
  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Mutation
            mutation={LOGIN_USER}
            onCompleted={({ login }) => {
              localStorage.setItem("token", login[0]._id);
              localStorage.setItem("name", login[0].name);
              client.writeData({ data: { isLoggedIn: true } });
            }}
          >
            {(login, { loading, error }) => {
              if (loading) return <Loading />;
              if (error) return <p>error</p>;

              return (
                <LoginForm
                  login={login}
                  handleChange={this.handleChange}
                  getLogin={this.getLogin}
                />
              );
            }}
          </Mutation>
        )}
      </ApolloConsumer>
    );
  }
}
