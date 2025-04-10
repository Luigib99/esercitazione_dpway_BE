const { DataTypes } = require('sequelize');
const database = require('../config/database');
const sequelize = database.getSequelize();

const UserRole = sequelize.define('UserRole', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'user_role',
    timestamps: false
});

module.exports = UserRole;
