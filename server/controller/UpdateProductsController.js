const updateProductModel = require('../model/updateProductModel');
const updateProductController = async(req, res) => {
    try
    {
        const {product_name, product_main_functions, product_id}= req.query
        const result = await updateProductModel(product_name, product_main_functions, product_id);
        res.status(200).json({message: 'Product Added Successfullt', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}
module.exports = updateProductController;