const con = require('../db');
const viewProductsModel = () => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM product", (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = viewProductsModel;
