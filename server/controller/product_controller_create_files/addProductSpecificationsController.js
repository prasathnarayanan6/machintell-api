const addProductSpecifications = require('../../model/product_create_files/addProductSpecifications');
const addProductSpecificationsController = async (req,res) => 
{
    try
    {
        const {product_specs_id, product_id, product_specifications, product_unit, product_value}= req.query
        const result = await addProductSpecifications(product_specs_id, product_id, product_specifications, product_unit, product_value);
        res.status(200).json({message: 'Product Added Successfullt', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addProductSpecificationsController;