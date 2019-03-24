import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Apollo from "./Apollo";
import { ApolloProvider } from "react-apollo";
import Main from "pages/Main";
import "css/App.css";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={Apollo}>
        <Router>
          <div className="App">
            <Route path="/" component={Main} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
