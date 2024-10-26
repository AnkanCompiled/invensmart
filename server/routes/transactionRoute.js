import { Router } from "express";
import { authenticate, authorization } from "../middleware/auth.js";

import transactionsController from "../controller/transactionsController.js";

const transactionsRoute = Router();

transactionsRoute.get(
  "/",
  authenticate,
  authorization,
  transactionsController.getTransaction
);
transactionsRoute.post(
  "/",
  authenticate,
  transactionsController.addTransaction
);

export default transactionsRoute;
