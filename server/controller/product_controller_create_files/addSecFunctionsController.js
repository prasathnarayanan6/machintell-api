const addSecFunctions = require('../../model/product_create_files/addSecFunctions');
const addSecFunctionsController = async (req,res) => 
{
    try
    {
        const {sub_sec_functions_id, product_id, sub_secondary_functions_details}= req.query
        const result = await addSecFunctions(sub_sec_functions_id, product_id, sub_secondary_functions_details);
        res.status(200).json({message: 'Product Added Successfullt', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addSecFunctionsController;