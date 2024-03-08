const addProductModel = require('../model/addProductModel');
const addProductController = async (req,res) => 
{
    try
    {
        const {product_name, product_id, product_main_functions, product_secondary_function_1, product_secondary_function_2 }= req.body
        const [result] = await addProductModel(product_name, product_id, product_main_functions, product_secondary_function_1, product_secondary_function_2)
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};