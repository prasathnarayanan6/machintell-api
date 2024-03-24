const express = require('express');
const router = express.Router();
const addProductSecondaryFunctionController = require('../../controller/product_controller_create_files/addProductSecondaryFunctionController');
router.post('/', addProductSecondaryFunctionController);

module.exports = router;