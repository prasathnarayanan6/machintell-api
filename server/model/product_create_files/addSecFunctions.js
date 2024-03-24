const con = require('../db');
const addSecFunctions = (sub_sec_functions_id, product_id, sub_secondary_functions_details) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO sub_sec_functions(sub_sec_functions_id, product_id, sub_secondary_functions_details) VALUES(?, ?, ?)", 
        [sub_sec_functions_id, product_id, sub_secondary_functions_details],
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
module.exports = addSecFunctions;
