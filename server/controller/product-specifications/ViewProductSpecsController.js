const viewproductSpecsModel = require('../../model/product-specifications-model/viewproductSpecsModel');
const ViewProductSpecsController = async (req, res) => {
    try 
    {
        const {id} = req.params;
        const [result] = await viewproductSpecsModel(id);
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error', data:err});
    }
}
module.exports = ViewProductSpecsController;