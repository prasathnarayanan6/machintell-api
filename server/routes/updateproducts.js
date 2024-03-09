const express = require('express');
const router = express.Router();
const viewproductcontroller = require('../controller/ViewProductsController');
router.patch('/', viewproductcontroller);

module.exports = router;