import express from "express";
import userRoute from "./userRoute";
import productRoute from "./productRoute.js";

const Router = express.Router();

Router.use("/", userRoute);
Router.use("/products",productRoute);

export default Router;
