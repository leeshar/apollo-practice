import ApolloClient from "apollo-boost";

const apollo = new ApolloClient({
  uri: "http://localhost:4000/"
});

export default apollo;
