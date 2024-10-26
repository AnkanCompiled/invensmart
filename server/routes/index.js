import express from "express";
import userRoute from "./userRoute.js";
import productRoute from "./productRoute.js";
import transactionsRoute from "./transactionRoute.js";
import categoryRoute from "./categoryRouter.js";

const Router = express.Router();

Router.use("/", userRoute);
Router.use("/products", productRoute);
Router.use("/transactions", transactionsRoute);


export default Router;
