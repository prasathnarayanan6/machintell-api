const addSubAssembliesSpecifications = require('../../model/product_create_files/addSubAssembliesSpecifications');
const addSubAssembliesSpecificationsController = async (req,res) => 
{
    try
    {
        const {sub_assembly_specs_id, sub_assembly_id, sub_assembly_specifications, sub_assembly_unit, sub_assembly_value}= req.query
        const result = await addSubAssembliesSpecifications(sub_assembly_specs_id, sub_assembly_id, sub_assembly_specifications, sub_assembly_unit, sub_assembly_value);
        res.status(200).json({message: 'Product Added Successfullt', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addSubAssembliesSpecificationsController;