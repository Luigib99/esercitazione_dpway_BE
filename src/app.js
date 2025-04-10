const express = require('express');
const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTE
const utentiRoutes = require('./route/userRoute');
app.use('/api/utenti', utentiRoutes);

module.exports = app;
