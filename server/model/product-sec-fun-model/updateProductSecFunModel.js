const con = require("../db");
const updateProductSecFunModel = (product_secondary_functions_details, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            "UPDATE product_secondary_functions SET product_secondary_functions_details = ? WHERE p_sec_fun_id = ?",
            [product_secondary_functions_details, id],
            (error, result) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    console.log(result);
                    resolve(result);
                }
            }
        );
    });
};

module.exports = updateProductSecFunModel;
