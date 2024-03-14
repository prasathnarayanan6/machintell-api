 const con = require('../db');
 const updateProductModel = (product_name, product_main_function, product_secondary_function_1, product_secondary_function_2, id) => {
    return new Promise((resolve, reject) => {
        con.query("UPDATE product SET product_name = ? , product_main_functions = ? , product_secondary_function_1 = ? , product_secondary_function_2 = ? WHERE product_id = ?", [product_name, product_main_function, product_secondary_function_1, product_secondary_function_2, id], 
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