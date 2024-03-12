const updateproductSpecsModel = require('../../model/product-specifications-model/updateproductSpecsModel');
const UpdateProductSpecsController = async (req, res) => {
    try
    {
        const {id} = req.params
        const {product_specs, product_unit, product_value} = req.query;
        const result = await updateproductSpecsModel(id, product_specs, product_unit, product_value);
        res.status(200).json({message: 'Product Added Successfully', data: result});
    }
    catch (error)
    {
        res.json({message: 'OOPs'});
    }
}
module.exports = UpdateProductSpecsController;