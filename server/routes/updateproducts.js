const express = require('express');
const router = express.Router();
const updateproductcontroller = require('../controller/UpdateProductsController');
router.get('/:id', updateproductcontroller);

module.exports = router;