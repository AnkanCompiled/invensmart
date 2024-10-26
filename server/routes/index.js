import express from "express";
import userRoute from "./userRoute";

const Router = express.Router();

Router.use("/", userRoute);

export default Router;
