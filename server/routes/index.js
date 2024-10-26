import express from "express";
import userRoute from "./userRoute";
import productRoute from "./productRoute.js";
import transactionsRoute from "./transactionRoute";
import categoryRoute from "./categoryRouter.js"
import supplierRoute from "./supplier.js"

const indexRoute = express.Router();

indexRoute.use("/", userRoute);
indexRoute.use("/products",productRoute);
indexRoute.use("/transactions", transactionsRoute);
indexRoute.use("/categories", categoryRoute);
indexRoute.use("/supplier",supplierRoute);

export default Router;
