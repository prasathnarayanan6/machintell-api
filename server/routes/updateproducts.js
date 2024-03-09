const express = require('express');
const router = express.Router();
const updateproductcontroller = require('../controller/UpdateProductsController');
router.put('/', updateproductcontroller);

module.exports = router;