const con = require("../db");
const updateProductModel = (product_name, file_location, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            "UPDATE product SET product_name = ? , File_Location = ? WHERE product_id = ?",
            [product_name, file_location, id],
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

module.exports = updateProductModel;
