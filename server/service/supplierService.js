import supplierRepo from "../db/supplierRepo.js"
import AppError from "../error/AppError.js"
const addSuppliers = async (body)=>{
    try {
        const newSupplier = await supplierRepo.addSuppliers(body);
        if(!newSupplier.length > 0){
            throw new AppError("Couldn't add supplier")
        }
        return newSupplier;
    } catch (err) {
        if(err.message === "Couldn't add supplier"){
            throw new AppError(err.message,500);
        }
        throw new AppError(err.message,404);

    }
}

export default {
    addSuppliers
}