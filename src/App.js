import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import apollo from "./apolloClient";
import { ApolloProvider } from "react-apollo";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apollo}>
        <Router>
          <div className="App" />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
