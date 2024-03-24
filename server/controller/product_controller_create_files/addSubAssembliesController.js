const addSubAssemblies = require('../../model/product_create_files/addSubAssemblies');
const addSubAssembliesController = async (req,res) => 
{
    try
    {
        const {product_id, subassembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, to_add_assemblies}= req.query
        const result = await addSubAssemblies(product_id, subassembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, to_add_assemblies);
        res.status(200).json({message: 'Product Added Successfullt', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addSubAssembliesController;