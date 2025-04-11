const express = require('express');
const router = express.Router();
const userController = require('../controller/userController'); // Assicurati che il controller esista

// READ ALL
router.get('/readAll', userController.readAllUsers);

module.exports = router;
