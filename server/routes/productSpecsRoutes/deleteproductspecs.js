const express = require('express');
const router = express.Router();
const deleteproductspecscontroller = require('../../controller/product-specifications/DeleteProductSpecsController');
router.delete('/:id', deleteproductspecscontroller);

module.exports = router;