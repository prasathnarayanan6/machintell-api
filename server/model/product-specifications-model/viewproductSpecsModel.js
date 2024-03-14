const con = require('../db');
const viewproductSpecsModel = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM product_specifications product_id=?",[id],
        (error, result) => {
            if(error)
            {
                console.log(error);
                reject(error);
            }
            else 
            {
                console.log(result);
                resolve(result);
            }
        })
    })
}
module.exports = viewproductSpecsModel;