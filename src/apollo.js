import ApolloClient from "apollo-boost";

const Apollo = new ApolloClient({
  uri: "http://localhost:4000/"
});

export default Apollo;
