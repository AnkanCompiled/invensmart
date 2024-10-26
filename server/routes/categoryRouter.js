import express from 'express';
const catagoryRouter = express.Router();

import auth from "../middleware/auth"


import categoryController from '../controller/categoryController';

catagoryRouter.post('/',auth.authenticate,auth.authorization,categoryController.addCatagory);

catagoryRouter.get('/:id',categoryController.getCatagoryById);


export default catagoryRouter;