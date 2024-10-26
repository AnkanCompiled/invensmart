import express from "express";
import userRoute from "./userRoute";
import transactionsRoute from "./transactionRoute";

const Router = express.Router();

Router.use("/", userRoute);
Router.use("/transactions", transactionsRoute);

export default Router;
