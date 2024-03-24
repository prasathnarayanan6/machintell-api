const express = require('express');
const router = express.Router();
const addSubAssembliesController = require('../../controller/product_controller_create_files/addSubAssembliesController');
router.post('/', addSubAssembliesController);

module.exports = router;