const updateSubAssembliesModel = require("../../model/sub-assemblies-model/updateSubAssembliesModel");
const updateSubAssembliesController = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            subassembly_name,
            file_location,
            sub_assembly_bought_up,
            to_add_assemblies,
        } = req.query;
        const result = await updateSubAssembliesModel(
            subassembly_name,
            file_location,
            sub_assembly_bought_up,
            to_add_assemblies,
            id
        );
        res.status(200).json({
            message: "Sub Assembly Updated Successfully",
            data: result,
        });
    } catch (err) {
        console.log(err);
        res.json({ error: "Not Properly Updated. Please try again" });
    }
};
module.exports = updateSubAssembliesController;
