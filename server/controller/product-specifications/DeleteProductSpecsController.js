const deleteProductSpecsModel = require('../../model/product-specifications-model/deleteproductSpecsModel');
const DeleteProductSpecsController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deleteProductSpecsModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeleteProductSpecsController;