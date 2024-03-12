const con = require('../db');
const addproductSpecsModel = (product_id, product_specs, product_unit, product_value) => {
    return new Promise((resolve, reject)=>
    {
        con.query('INSERT INTO product_specifications(product_id, product_specifications, product_unit, product_value) VALUES(?, ?, ?, ?)', [product_id, product_specs, product_unit, product_value],
        (error, result) => {
            if(error)
            {
                console.log("Problem");
                reject(error);
            }
            else
            {
                console.log(result);
                resolve(result);
            }
        })
    })  
}
module.exports = addproductSpecsModel;