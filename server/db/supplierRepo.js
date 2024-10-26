import db from "../database/db.js";

const addSuppliers = async (body) => {

    const{SupplierName,ContactName,Email,Phone,Address,City ,State ,ZipCode ,Country} = body

    const [rows] = await db.execute(
        'INSERT INTO suppliers(SupplierName,ContactName,Email,Phone,Address,City ,State ,ZipCode ,Country) VALUES(?,?,?,?,?,?,?,?,?)',
        [SupplierName,ContactName,Email,Phone,Address,City ,State ,ZipCode ,Country]
    )
    return rows;
}

export default {
    addSuppliers
}