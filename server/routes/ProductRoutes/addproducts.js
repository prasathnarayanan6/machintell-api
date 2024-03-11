const express = require('express');
const router = express.Router();
const addproductcontroller = require('../../controller/product-controller/AddProductsController');
router.post('/', addproductcontroller);

module.exports = router;