import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
  type Query {
    getUser(id: Int!): User
    getUserList: [User]
  }

  type Mutation {
    createUser(name: String!): User
  }

  type User {
    id: ID
    name: String
    balance: Float
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
