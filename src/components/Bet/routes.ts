import express from "express";
import { graphqlHTTP } from "express-graphql";

import betSchema from "./schema";

const betRouter = express.Router();

betRouter.use(
  "/bet",
  graphqlHTTP({
    graphiql: true,
    schema: betSchema,
  })
);

export { betRouter };
