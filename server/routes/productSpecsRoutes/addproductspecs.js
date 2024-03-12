const express = require('express');
const router = express.Router();
const addproductspecscontroller = require('../../controller/product-specifications/AddProductSpecsController');
router.post('/', addproductspecscontroller);

module.exports = router;