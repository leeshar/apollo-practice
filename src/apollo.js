import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
const cache = new InMemoryCache();

const Apollo = new ApolloClient({
  cache,
  uri: "http://localhost:4000/"
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token")
  }
});
export default Apollo;
