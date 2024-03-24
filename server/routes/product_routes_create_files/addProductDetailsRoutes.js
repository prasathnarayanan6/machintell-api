const express = require('express');
const router = express.Router();
const addProductDetailsController = require('../../controller/product_controller_create_files/addProductDetailsController');
router.post('/', addProductDetailsController);

module.exports = router;