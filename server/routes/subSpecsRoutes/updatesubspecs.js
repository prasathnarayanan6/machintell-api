const express = require("express");
const router = express.Router();
const updatesubspecscontroller = require("../../controller/sub-specs/UpdateSubSpecsController");
router.put("/:id", updatesubspecscontroller);

module.exports = router;
