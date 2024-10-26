import express from "express";
import userRoute from "./userRoute";
import productRoute from "./productRoute.js";
import transactionsRoute from "./transactionRoute";
import categoryRoute from "./categoryRouter.js"

const Router = express.Router();

Router.use("/", userRoute);
Router.use("/products",productRoute);
Router.use("/transactions", transactionsRoute);
Router.use("/categories", categoryRoute);

export default Router;
