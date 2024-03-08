const express = require('express');
const router = express.Router();
const viewproductcontroller = require('../controller/ViewProductsController');
router.get('/', viewproductcontroller);

module.exports = router;