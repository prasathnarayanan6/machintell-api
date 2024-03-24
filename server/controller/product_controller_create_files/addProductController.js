const addProduct = require('../../model/product_create_files/addProduct');
const addProductController = async (req,res) => 
{
    try
    {
        const {product_name, product_id, File_Location }= req.query
        const result = await addProduct(product_name, product_id, File_Location);
        res.status(200).json({message: 'Product Added Successfullt', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addProductController;