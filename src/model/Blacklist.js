const { DataTypes } = require('sequelize');
const database = require('../config/database');
const sequelize = database.getSequelize();

const Blacklist = sequelize.define('Blacklist', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
},{
    tableName: 'blacklist',
    timestamps: false
});

module.exports = Blacklist;