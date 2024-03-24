const con = require('../db');
const addSubAssemblies = (product_id, subassembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, to_add_assemblies) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO sub_assemblies(product_id, subassembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, to_add_assemblies) VALUES(?, ?, ?, ?, ?, ?)", 
        [product_id, subassembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, to_add_assemblies],
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
module.exports = addSubAssemblies;
