const express = require("express");
const router = express.Router();
const updateproductsecfuncontroller = require("../../controller/product-sec-fun/UpdateProductSecFunController");
router.put("/:id", updateproductsecfuncontroller);

module.exports = router;
