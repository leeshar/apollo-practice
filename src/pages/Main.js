import React, { Component } from "react";
import Header from "components/main/Header";
import Section from "components/main/Section";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export default class Main extends Component {
  render() {
    return (
      <div id="main">
        <Query query={IS_LOGGED_IN}>
          {({ data }) => <Header logged={data.isLoggedIn} />}
        </Query>
        <Section />
        <footer>footer</footer>
      </div>
    );
  }
}
