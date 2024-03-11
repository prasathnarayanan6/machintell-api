const viewProductModel = require('../../model/product-model/viewProductModel');
const viewproductscontroller = async (req, res) => {
    try 
    {
        const [result] = await viewProductModel();
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewproductscontroller;






