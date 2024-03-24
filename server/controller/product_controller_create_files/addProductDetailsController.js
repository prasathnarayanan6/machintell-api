const addProductDetails = require('../../model/product_create_files/addProductDetails');
const addProductDetailsController = async (req,res) => 
{
    try
    {
        const {product_details_id, product_id, product_main_functions}= req.query
        const result = await addProductDetails(product_details_id, product_id, product_main_functions);
        res.status(200).json({message: 'Product Added Successfullt', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addProductDetailsController;