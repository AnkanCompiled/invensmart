import express from 'express';
const catagoryRouter = express.Router();

import {authenticate,authorization} from "../middleware/auth"


import categoryController from '../controller/categoryController';

catagoryRouter.post('/',authenticate,authorization,categoryController.addCatagory);

catagoryRouter.get('/:id',categoryController.getCatagoryById);


export default catagoryRouter;