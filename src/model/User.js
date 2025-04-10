const { DataTypes } = require('sequelize');
const database = require('../config/database');
const sequelize = database.getSequelize();

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
    },
    passwordExpirationDays: {
        type: DataTypes.INTEGER,
        allowNull: true,  // Può essere NULL, se non definito
    },
    passwordExpirationDate: {
        type: DataTypes.DATE,
        allowNull: true,  // Può essere NULL, se non definito
    },
    createdDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    lastModifiedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,  // Impostato su true di default
    }
}, {
    tableName: 'user',  // Assicurati che il nome della tabella corrisponda al nome nel DB
    timestamps: false,   // Disabilita l'uso automatico di createdAt e updatedAt
});

module.exports = User;
