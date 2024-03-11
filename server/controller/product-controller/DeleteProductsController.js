const deleteProductModel = require('../../model/product-model/deleteProductModel');
const DeleteProductsController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deleteProductModel(id);
      res.status(200).json({message : 'Data Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeleteProductsController;