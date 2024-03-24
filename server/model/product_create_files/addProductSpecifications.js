const con = require('../db');
const addProductSpecifications = (product_specs_id, product_id, product_specifications, product_unit, product_value) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO product_specifications(product_specs_id, product_id, product_specifications, product_unit, product_value) VALUES(?, ?, ?, ?, ?)", 
        [product_specs_id, product_id, product_specifications, product_unit, product_value],
        (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            }
            else 
            {
                console.log(result);
                resolve(result);
            }
        }
        );    
    })
}
module.exports = addProductSpecifications;
