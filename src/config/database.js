require('dotenv').config();
const { Sequelize } = require('sequelize');

class Database {
    static instance = null;

    constructor() {
        if (Database.instance) {
            return Database.instance;
        }

        // CONNESSIONE AL DB
        this.sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                dialect: 'postgres',
            }
        );

        this.sequelize.authenticate()
            .then(() => console.log(' Connesso al database'))
            .catch((error) => console.error('Errore nella connessione al database: ', error));

        Database.instance = this;
    }

    getSequelize() {
        return this.sequelize;
    }

    // SYNC
    async syncModels() {
        const sequelize = this.getSequelize();
        try {
            await sequelize.sync({ force: false });
            console.log(' Modelli sincronizzati con il database');
        } catch (error) {
            console.error('Errore nella sincronizzazione dei modelli:', error);
        }
    }
}

module.exports = new Database();
