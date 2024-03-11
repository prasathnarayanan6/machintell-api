const express = require('express');
const router = express.Router();
const deleteproductcontroller = require('../../controller/product-controller/DeleteProductsController');
router.delete('/:id', deleteproductcontroller);

module.exports = router;