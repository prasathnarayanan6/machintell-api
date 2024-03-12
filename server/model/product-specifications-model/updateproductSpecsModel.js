const con = require('../db');
const updateproductSpecsModel = (id, product_specs, product_unit, product_value) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE product_specifications SET product_id = ?, product_specifications = ?, product_unit = ?, product_value = ?', [id, product_specs, product_unit, product_value],
            (error, result) => 
            {
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
            }
            );
        })
}

module.exports = updateproductSpecsModel;