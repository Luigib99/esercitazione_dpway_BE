require('dotenv').config();
require('./src/model/associations');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./src/config/database');
const userRoute = require('./src/route/userRoute');

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// ROUTE
/*
app.use('/users', userRoute);
app.use((req, res) => {
    res.status(404).json({ error: 'Route non trovata' });
});
*/

app.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: "Errore nel recupero degli users"});
    }
})

// SINCRONIZZA DB E MODELLI
database.syncModels();

// PORTA
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server avviato sulla porta ${PORT}`);
});
