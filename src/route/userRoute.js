const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// CREATE
router.post('/create', userController.createUser);

//READALL
router.get('/readAll', userController.readAllUsers);

module.exports = router;
