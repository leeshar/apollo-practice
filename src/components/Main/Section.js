import React from "react";
import { Route } from "react-router-dom";
import Loadable from "react-imported-component";
import Loading from "components/loading/Loading";
import "css/components/main/Section.css";
// Default Page
const Home = Loadable(() => import("pages/Home"), {
  LoadingComponent: Loading
});

// home
const Register = Loadable(() => import("pages/home/Register"), {
  LoadingComponent: Loading
});

const Welcome = Loadable(() => import("pages/home/Welcome"), {
  LoadingComponent: Loading
});

const Login = Loadable(() => import("pages/home/Login"), {
  LoadingComponent: Loading
});

const BookList = Loadable(() => import("pages/books/BookList"), {
  LoadingComponent: Loading
});
const Section = () => (
  <section className="main-section">
    <Route exact path="/" component={Home} />
    <Route path="/home/register" component={Register} />
    <Route path="/home/welcome" component={Welcome} />
    <Route path="/home/login" component={Login} />
    <Route path="/products" component={BookList} />
  </section>
);

export default Section;
