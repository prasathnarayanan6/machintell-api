const express = require('express');
const router = express.Router();
const addSecFunctionsController = require('../../controller/product_controller_create_files/addSecFunctionsController');
router.post('/', addSecFunctionsController);

module.exports = router;