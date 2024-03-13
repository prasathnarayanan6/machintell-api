const con = require('../db');
const viewproductSpecsModel = () => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM product_specifications",
        (error, result) => {
            if(error)
            {
                
            }
            else 
            {

            }
        })
    })
}
module.exports = viewproductSpecsModel;