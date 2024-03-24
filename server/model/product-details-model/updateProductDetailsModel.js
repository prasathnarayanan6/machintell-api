const con = require("../db");
const updateProductDetailsModel = (product_main_functions, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            "UPDATE product_details SET product_main_functions = ? WHERE product_details_id = ?",
            [product_main_functions, id],
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

module.exports = updateProductDetailsModel;
