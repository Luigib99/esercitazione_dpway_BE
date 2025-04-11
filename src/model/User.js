const { DataTypes } = require('sequelize');
const database = require('../config/database');
const sequelize = database.getSequelize();

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    passwordExpirationDays: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field:"passwordexpirationdays"
    },
    createdDate: {
        type: DataTypes.DATE,
        field:"createddate"
    },
    lastModifiedDate: {
        type: DataTypes.DATE,
        field:"lastmodifieddate"
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, {
    tableName: 'users',
    timestamps: false,
});

module.exports = Users;
