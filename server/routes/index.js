import express from "express";
import userRoute from "./userRoute.js";
import productRoute from "./productRoute.js";

import transactionsRoute from "./transactionRoute";


const Router = express.Router();

Router.use("/", userRoute);
Router.use("/products", productRoute);
Router.use("/transactions", transactionsRoute);


export default Router;
