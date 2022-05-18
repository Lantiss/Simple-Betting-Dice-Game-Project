import express from "express";
import { graphqlHTTP } from "express-graphql";

import userSchema from "./schema";

const userRouter = express.Router();

userRouter.use(
  "/user",
  graphqlHTTP({
    graphiql: true,
    schema: userSchema,
  })
);

export { userRouter };
