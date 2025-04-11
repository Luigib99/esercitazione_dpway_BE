const express = require('express');
const router = express.Router();
const userController = require('../controller/userController'); // Assicurati che il controller esista

// CREATE
router.post('/create', userController.createUser);

// READ ALL
router.get('/readAll', userController.readAllUsers);

module.exports = router;
