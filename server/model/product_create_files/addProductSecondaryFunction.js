const con = require('../db');
const addProductSecondaryFunction = (p_sec_fun_id, product_id, product_secondary_functions_details) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO product_secondary_functions(p_sec_fun_id, product_id, product_secondary_functions_details) VALUES(?, ?, ?)", 
        [p_sec_fun_id, product_id, product_secondary_functions_details],
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
module.exports = addProductSecondaryFunction;
