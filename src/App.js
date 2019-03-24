import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import apollo from "./apolloClient";
import { ApolloProvider } from "react-apollo";
import Main from "pages/Main";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apollo}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Main} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
