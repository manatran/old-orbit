const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
  hello: String!
  general: String!
}`;

const resolvers = {
  Query: {
    hello: () => `Hello there.`,
    general: () => `General Kenobi! You are a bold one.`
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(({port}) => console.log(`Server is running on port ${port}`));