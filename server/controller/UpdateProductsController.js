const updateProductModel = require('../model/updateProductModel');
const updateProductController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {product_name, product_main_function}= req.query
        res.json({id : id, product_name: product_name, product_main_function: product_main_function});
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