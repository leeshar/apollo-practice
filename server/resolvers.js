const resolvers = {
  Query: {
    books: async (obj, args, ctx) => {
      return await ctx.book.find();
    },
    findbook: async (obj, args, ctx) => {
      return await ctx.book.find({ author: args.author });
    }
  },
  Mutation: {
    addBook: async (obj, args, ctx) => {
      return await new ctx.book(args).save();
    },
    newUser: async (obj, args, ctx) => {
      return await new ctx.user(args).save();
    }
  }
};

export default resolvers;
