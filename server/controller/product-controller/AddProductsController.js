const addProductModel = require('../../model/product-model/addProductModel');
const addProductController = async (req,res) => 
{
    try
    {
        const {product_name, product_id, product_main_functions, product_secondary_function_1, product_secondary_function_2 }= req.query
        const result = await addProductModel(product_name, product_id, product_main_functions, product_secondary_function_1, product_secondary_function_2);
        res.status(200).json({message: 'Product Added Successfullt', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addProductController;