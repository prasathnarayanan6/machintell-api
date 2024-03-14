const addMainAssemblyModel = require('../../model/main-assemblies/addMainAssemblyModel');
const addMainAssemblyController = async (req,res) => 
{
    try
    {
        const {main_assembly_name, main_assembly_id, ma_main_function, ma_secondary_function_1, ma_secondary_function_2}= req.query
        const result = await addMainAssemblyModel(main_assembly_name, main_assembly_id, ma_main_function, ma_secondary_function_1, ma_secondary_function_2);
        res.status(200).json({message: 'Main Assembly Added Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addMainAssemblyController;