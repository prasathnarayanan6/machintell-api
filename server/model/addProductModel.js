const con = require('./db');
const addProductModel = (product_name, product_id, product_main_functions, product_secondary_function_1, product_secondary_function_2) => {
    return new promise((resolve, reject) => {
        con.query("INSERT INTO product(product_name, product_id, product_main_functions, product_secondary_function_1, product_secondary_function_2) VALUES(?, ?, ?, ?, ?)", 
        [product_name, product_id, product_main_functions, product_secondary_function_1, product_secondary_function_2],
        (error, result) => {
            if (error) {
                console.error(error);
            }
            else 
            {
                console.log(result);
            }
        }
        );    
    })
}
module.exports = addProductModel;
