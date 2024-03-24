const updateProductSecFunModel = require("../../model/product-sec-fun-model/updateProductSecFunModel");
const updateProductSecFunController = async (req, res) => {
    try {
        const { id } = req.params;
        const { product_secondary_functions_details } = req.query;
        const result = await updateProductSecFunModel(
            id,
            product_secondary_functions_details
        );
        res.status(200).json({
            message: "Product Secondary Functions Updated Successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.json({ error: "Not Properly Updated. Please try again" });
    }
};
module.exports = updateProductSecFunController;
