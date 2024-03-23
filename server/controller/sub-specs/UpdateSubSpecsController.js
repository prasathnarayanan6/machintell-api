const updateSubSpecsModel = require("../../model/sub-specs-model/updateSubSpecsModel");
const updateSubSpecsController = async (req, res) => {
    try {
        const { id } = req.params;
        const { sub_assembly_specs, sub_assembly_unit, sub_assembly_value } =
            req.query;
        const result = await updateSubSpecsModel(
            sub_assembly_specs,
            sub_assembly_unit,
            sub_assembly_value,
            id
        );
        res.status(200).json({
            message: "Sub Assembly Specifications Added Successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.json({ error: "Not Properly Updated. Please try again" });
    }
};
module.exports = updateSubSpecsController;
