const con = require("../db");
const updateSubAssembliesModel = (
    subassembly_name,
    file_location,
    sub_assembly_bought_up,
    to_add_assemblies,
    id
) => {
    return new Promise((resolve, reject) => {
        con.query(
            "UPDATE sub_assemblies SET subassembly_name = ? , file_location = ?, sub_assembly_bought_up = ?, to_add_assemblies = ? WHERE sub_assembly_id = ?",
            [
                subassembly_name,
                file_location,
                sub_assembly_bought_up,
                to_add_assemblies,
                id,
            ],
            (error, result) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    console.log(result);
                    resolve(result);
                }
            }
        );
    });
};

module.exports = updateSubAssembliesModel;
