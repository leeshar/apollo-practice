import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import mongoose, { connect, Schema } from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const start = async () => {
  const connection = await mongoose.connect(
    "mongodb://owner:ownertest1@ds123896.mlab.com:23896/owner"
  );
  await autoIncrement.initialize(connection);

  const book = connection.model("book", {
    title: String,
    author: String,
    content: String,
    price: Number,
    img_path: String
  });
  const user = connection.model("user", {
    id: String,
    pwd: String,
    name: String
  });
  const communitySchema = new Schema({
    bno: Number,
    nick_name: String,
    title: String,
    content: String,
    read_cnt: Number,
    date: String
  });
  communitySchema.plugin(autoIncrement.plugin, {
    model: "communities",
    field: "bno",
    startAt: 1,
    incrementBy: 1
  });
  const community = connection.model("communities", communitySchema);
  const server = new GraphQLServer({
    typeDefs: "server/graphql/schema.graphql",
    resolvers,
    context: { book, user, community }
  });
  server.start(() => console.log("GraphQL Server Running"));
};
start();
