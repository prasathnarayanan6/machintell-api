const express = require('express');
const router = express.Router();
const viewproductspecscontroller = require('../../controller/product-specifications/ViewProductSpecsController');
router.post('/', viewproductspecscontroller);

module.exports = router;