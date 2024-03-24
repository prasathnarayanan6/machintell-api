const express = require("express");
const router = express.Router();
const updatesubsecfuncontroller = require("../../controller/sub-sec-fun/UpdateSubSecFunController");
router.put("/:id", updatesubsecfuncontroller);

module.exports = router;
