const express = require('express');
const router = express.Router();
const viewproductspecscontroller = require('../../controller/product-specifications/');
router.post('/', viewproductcontroller);

module.exports = router;