import React, { Component } from "react";
import Header from "components/Main/Header";

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
        <section>Section</section>
        <footer>footer</footer>
      </div>
    );
  }
}
