import AppError from "../error/AppError.js";

import supplierService from "../service/supplierService.js"

const suppliers = async (req, res, next) => {
    try{
        const ans = await supplierService.addSuppliers(req.body);
        
        if(!ans){
            throw new AppError('Failed to add supplier',400);
        }
        res.status(201).json({
            message: 'Supplier added successfully',
            supplierID: ans.insertId,
        })
    }catch(err){
        next(err);
    }
   

};

export default {
    suppliers
}