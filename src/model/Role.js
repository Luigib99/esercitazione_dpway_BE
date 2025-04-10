const { DataTypes } = require('sequelize');
const database = require('../config/database');
const sequelize = database.getSequelize();

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
    },
    createdDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
},{
    tableName: 'role',
    timestamps: false
});

module.exports = Role;