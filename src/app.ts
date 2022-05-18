import express from "express";
import { userRouter } from "./components/User/routes";
import { betRouter } from "./components/Bet/routes";

const app = express();

app.use("/", userRouter);
app.use("/", betRouter);

export { app };
