const con = require("../db");
const updateSubSecFunModel = (sub_secondary_functions_details, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            "UPDATE sub_sec_functions SET sub_secondary_functions_details = ? WHERE sub_sec_functions_id = ?",
            [sub_secondary_functions_details, id],
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

module.exports = updateSubSecFunModel;
