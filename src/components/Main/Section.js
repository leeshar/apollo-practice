import React from "react";
import { Switch, Route } from "react-router-dom";

const Section = () => (
  <section className="main-section">
    <Switch>
      <Route exact path="/home/register" />
    </Switch>
  </section>
);

export default Section;
