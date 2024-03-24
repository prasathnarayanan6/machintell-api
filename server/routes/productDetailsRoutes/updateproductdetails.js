const express = require("express");
const router = express.Router();
const updateproductdetailscontroller = require("../../controller/product-details/UpdateProductDetailsController");
router.put("/:id", updateproductdetailscontroller);

module.exports = router;
