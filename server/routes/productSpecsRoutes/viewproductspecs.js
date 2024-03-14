const express = require('express');
const router = express.Router();
const viewproductspecscontroller = require('../../controller/product-specifications/');
router.post('/', viewproductspecscontroller);

module.exports = router;