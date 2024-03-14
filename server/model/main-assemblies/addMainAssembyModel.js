const con = require('../db');
const addMainAssemblyModel = (main_assembly_name, main_assembly_id, ma_main_function, ma_secondary_function_1, ma_secondary_function_2) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO main_assemblies(main_assembly_name, main_assembly_id, ma_main_function, ma_secondary_function_1, ma_secondary_function_2) VALUES(?, ?, ?, ?, ?)", 
        [main_assembly_name, main_assembly_id, ma_main_function, ma_secondary_function_1, ma_secondary_function_2],
        (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            }
            else 
            {
                console.log(result);
                resolve(result);
            }
        }
        );    
    })
}
module.exports = addMainAssemblyModel;
