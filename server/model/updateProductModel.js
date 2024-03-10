 const con = require('./db');
 const updateProductModel = (product_name, product_main_function, product_id) => {
    return new Promise((resolve, reject) => {
        con.query("UPDATE product SET product_name = ? , product_main_function = ? WHERE product_id = ?", [product_name, product_main_function, product_id], 
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