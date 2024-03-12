const express = require('express');
const router = express.Router();
const updateproductspecscontroller = require('../../controller/product-specifications/UpdateProductSpecsController');
router.put('/:id', updateproductspecscontroller);

module.exports = router;