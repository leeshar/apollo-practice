import React, { Component } from "react";
import Header from "components/main/Header";
import Section from "components/main/Section";
import Nav from "components/main/Nav";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export default class Main extends Component {
  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  render() {
    return (
      <div id="main">
        <Query query={IS_LOGGED_IN}>
          {({ data }) => (
            <Header logged={data.isLoggedIn} logout={this.logout} />
          )}
        </Query>
        <Nav />
        <Section />
        <footer>footer</footer>
      </div>
    );
  }
}
