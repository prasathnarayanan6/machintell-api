const con = require('../db');
const addProductDetails = (product_details_id, product_id, product_main_functions) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO product_details(product_details_id, product_id, product_main_functions) VALUES(?, ?, ?)", 
        [product_details_id, product_id, product_main_functions],
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
module.exports = addProductDetails;
