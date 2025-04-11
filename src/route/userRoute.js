const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// READ ALL
router.get('/readAll', userController.readAll);

// READ BY ID
router.get('/read/:id', userController.readById);

module.exports = router;
