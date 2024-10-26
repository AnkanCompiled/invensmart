import express from 'express';
import auth from "../middleware/auth.js";
import supplierController from "../controller/supplierConrtoller.js"
const supplierroute = express.Router();

supplierroute.post("/",auth.authenticate,auth.authorization,supplierController.suppliers);


export default supplierroute;