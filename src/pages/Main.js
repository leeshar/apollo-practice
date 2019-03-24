import React, { Component } from "react";
import Header from "components/main/Header";
import Section from "components/main/Section";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      name: ""
    };
  }
  render() {
    const { logged, name } = this.state;
    return (
      <div id="main">
        <Header logged={logged} name={name} />
        <Section />
        <footer>footer</footer>
      </div>
    );
  }
}
