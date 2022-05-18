import { makeExecutableSchema } from "@graphql-tools/schema";
import {
  constraintDirective,
  constraintDirectiveTypeDefs,
} from "graphql-constraint-directive";
import { resolvers } from "./resolvers";

const typeDefs = `
  type Query {
    getBet(id: Int!): Bet
    getBetList: [Bet]
    getBestBetPerUser(limit: Int): [Bet]
  }

  type Mutation {
    createBet(userId: Int!, betAmount: Float!, chance: Float!): Bet
  }

  type Bet {
    id: ID
    userId: Int
    betAmount: Float @constraint(min: 1)
    chance: Float @constraint(min: 0, max: 100)
    payout: Float
    win: Boolean
  }
`;

let schema = makeExecutableSchema({
  typeDefs: [constraintDirectiveTypeDefs, typeDefs],
  resolvers,
});

schema = constraintDirective()(schema);

export default schema;
