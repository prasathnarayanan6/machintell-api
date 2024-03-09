const updateProductModel = require('../model/updateProductModel');
const updateProductController = async(req, res) => {
    try
    {
        const {product_id} = req.params
        // const {product_name, product_main_function}= req.query
        res.send(product_id)
        // const result = await updateProductModel(product_name, product_main_functions, product_id);
        // res.status(200).json({message: 'Product Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Pleas try again'});
    }
}
module.exports = updateProductController;