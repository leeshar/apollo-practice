import React from "react";
import { Route } from "react-router-dom";
import Loadable from "react-imported-component";
import Loading from "components/loading/Loading";

// Default Page
const Home = Loadable(() => import("pages/Home"), {
  LoadingComponent: Loading
});

// home
const Register = Loadable(() => import("pages/home/Register"), {
  LoadingComponent: Loading
});
const Section = () => (
  <section className="main-section">
    <Route exact path="/" component={Home} />
    <Route path="/home/register" component={Register} />
  </section>
);

export default Section;
