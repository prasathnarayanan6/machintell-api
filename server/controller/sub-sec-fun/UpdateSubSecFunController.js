const updateSubSecFunModel = require("../../model/sub-sec-fun-model/updateSubSecFunModel");
const updateSubSecFunController = async (req, res) => {
    try {
        const { id } = req.params;
        const { sub_secondary_functions_details } = req.query;
        const result = await updateSubSecFunModel(
            sub_secondary_functions_details,
            id
        );
        res.status(200).json({
            message: "Sub Assembly Secondary Functions Updated Successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.json({ error: "Not Properly Updated. Please try again" });
    }
};
module.exports = updateSubSecFunController;
