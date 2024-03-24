const addProductSecondaryFunction = require('../../model/product_create_files/addProductSecondaryFunction');
const addProductSecondaryFunctionController = async (req,res) => 
{
    try
    {
        const {p_sec_fun_id, product_id, product_secondary_functions_details}= req.query
        const result = await addProductSecondaryFunction(p_sec_fun_id, product_id, product_secondary_functions_details);
        res.status(200).json({message: 'Product Added Successfullt', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addProductSecondaryFunctionController;