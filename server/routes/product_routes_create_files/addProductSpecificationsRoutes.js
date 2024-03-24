const express = require('express');
const router = express.Router();
const addProductSpecificationsController = require('../../controller/product_controller_create_files/addProductSpecificationsController');
router.post('/', addProductSpecificationsController);

module.exports = router;