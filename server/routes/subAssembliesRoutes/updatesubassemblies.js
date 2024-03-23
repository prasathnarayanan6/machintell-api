const express = require("express");
const router = express.Router();
const updatesubassembliescontroller = require("../../controller/sub-assemblies/UpdateSubAssembliesController");
router.put("/:id", updatesubassembliescontroller);

module.exports = router;
