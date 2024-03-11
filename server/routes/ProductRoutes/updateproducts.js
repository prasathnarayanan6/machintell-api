const express = require('express');
const router = express.Router();
const updateproductcontroller = require('../../controller/product-controller/UpdateProductsController');
router.put('/:id', updateproductcontroller);

module.exports = router;