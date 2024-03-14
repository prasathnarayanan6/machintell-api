const con = require('../db');
const addsubassemblyModel = (main_assembly_id, items_name, sub_assembly_type, sub_assembly_id, sub_assembly_bought_up, file_location) => {
    return new Promise((resolve, reject)=>
    {
        con.query('INSERT INTO sub_assemblies(main_assembly_id, items_name, sub_assembly_type, sub_assembly_id, sub_assembly_bought_up, file_location) VALUES(?, ?, ?, ?, ?, ?)', [main_assembly_id, items_name, sub_assembly_type, sub_assembly_id, sub_assembly_bought_up, file_location],
        (error, result) => {
            if(error)
            {
                console.log("Problem");
                reject(error);
            }
            else
            {
                console.log(result);
                resolve(result);
            }
        })
    })  
}
module.exports = addsubassemblyModel;