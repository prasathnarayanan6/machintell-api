 const con = require('../db');
 const updateProductModel = (product_name, product_main_function, id) => {
    return new Promise((resolve, reject) => {
        con.query("UPDATE product SET product_name = ? , product_main_functions = ? WHERE product_id = ?", [product_name, product_main_function, id], 
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

 module.exports = updateProductModel;