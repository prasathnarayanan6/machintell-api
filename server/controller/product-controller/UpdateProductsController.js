const updateProductModel = require('../../model/product-model/updateProductModel');
const updateProductController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {product_name, product_main_function}= req.query
        const result = await updateProductModel(product_name, product_main_function, id);
        res.status(200).json({message: 'Product Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Pleas try again'});
    }
}
module.exports = updateProductController;