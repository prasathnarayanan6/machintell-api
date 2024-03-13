const con = require('../db');
const deleteproductSpecsModel = (id) => {
    return new Promise((resolve,reject)=>{
        con.query('DELETE FROM product_specifications WHERE product_id = ?',[id],   
        (error, result)=>{
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
module.exports = deleteproductSpecsModel;