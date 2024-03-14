const express = require('express');
const router = express.Router();
const addmainassemblycontroller = require('../../controller/product-controller/AddProductsController');
router.post('/', addmainassemblycontroller);

module.exports = router;