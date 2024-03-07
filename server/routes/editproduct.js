const express = require('express');
const router = express.Router();
const editController = require("../controller/EditProductController");
router.get('/', editController.get);

module.exports = router;