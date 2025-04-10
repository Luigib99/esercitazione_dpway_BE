require('dotenv').config();
require('./src/model/associations');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./src/config/database');
const app = require('./src/app');
const userRoute = require('./src/route/userRoute');

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// ROUTE
app.use('/users', userRoute);

// SINCRONIZZA DB E MODELLI
database.syncModels();

// PORTA
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` Server avviato sulla porta ${PORT}`);
});
