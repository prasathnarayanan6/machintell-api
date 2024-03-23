const updateProductDetailsModel = require("../../model/product-details-model/updateProductDetailsModel");
const updateProductDetailsController = async (req, res) => {
    try {
        const { id } = req.params;
        const { product_main_functions } = req.query;
        const result = await updateProductDetailsModel(
            id,
            product_main_functions
        );
        res.status(200).json({
            message: "Product Main Functions Updated Successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.json({ error: "Not Properly Updated. Please try again" });
    }
};
module.exports = updateProductDetailsController;
