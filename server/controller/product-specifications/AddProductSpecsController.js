const addproductSpecsModel = require('../../model/product-specifications-model/addproductSpecsModel');
const addProductController = async (req,res) => 
{
    // console.log(req.body);
    try
    {
        console.log(req.body);
        const {product_id, product_specs, product_unit, product_value}= req.body
        const result = await addproductSpecsModel(product_id, product_specs, product_unit, product_value);
        res.status(200).json({message: 'Product Added Successfullt', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error', data:err});
    }
};
module.exports = addProductController;
