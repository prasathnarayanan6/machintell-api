const con = require('../db');
const viewProductsSpecsModel = () => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM product_specifications", (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = viewProductsSpecsModel;
