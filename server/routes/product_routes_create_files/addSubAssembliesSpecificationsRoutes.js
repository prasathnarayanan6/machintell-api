const express = require('express');
const router = express.Router();
const addSubAssembliesSpecificationsController = require('../../controller/product_controller_create_files/addSubAssembliesSpecificationsController');
router.post('/', addSubAssembliesSpecificationsController);

module.exports = router;