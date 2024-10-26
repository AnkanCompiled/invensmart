import express from "express";
import userRoute from "./userRoute";
import productRoute from "./productRoute.js";

const Router = express.Router();

Router.use("/", userRoute);
route.use("/products",productRoute);

export default Router;
