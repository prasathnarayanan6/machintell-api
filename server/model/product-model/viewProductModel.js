const con = require('../db');
const viewProductsModel = () => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM main_assemblies", (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = viewProductsModel;
