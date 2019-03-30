import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import mongoose from "mongoose";

const start = async () => {
  await mongoose.connect(
    "mongodb://owner:ownertest1@ds123896.mlab.com:23896/owner"
  );
  const book = mongoose.model("book", {
    title: String,
    author: String,
    content: String,
    price: Number,
    img_path: String
  });
  const user = mongoose.model("user", {
    id: String,
    pwd: String,
    name: String
  });
  const server = new GraphQLServer({
    typeDefs: "server/graphql/schema.graphql",
    resolvers,
    context: { book, user }
  });
  server.start(() => console.log("GraphQL Server Running"));
};
start();
