const con = require('../db');
const addSubAssembliesSpecifications = (sub_assembly_specs_id, sub_assembly_id, sub_assembly_specifications, sub_assembly_unit, sub_assembly_value) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO sub_assemblies_specifications(sub_assembly_specs_id, sub_assembly_id, sub_assembly_specifications, sub_assembly_unit, sub_assembly_value) VALUES(?, ?, ?, ?, ?)", 
        [sub_assembly_specs_id, sub_assembly_id, sub_assembly_specifications, sub_assembly_unit, sub_assembly_value],
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
module.exports = addSubAssembliesSpecifications;
