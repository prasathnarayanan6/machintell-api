const express = require('express');
const router = express.Router();
const addProductController = require('../../controller/product_controller_create_files/addProductController');
router.post('/', addProductController);

module.exports = router;