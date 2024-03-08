const express = require('express');
const router = express.Router();
const viewproductcontroller = require('../controller/ViewProductsController');
router.post('/', viewproductcontroller);

module.exports = router;