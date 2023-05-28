const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Users = db.define('users', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname:{
        type: DataTypes.STRING(30),
    },
    lastname:{
        type: DataTypes.STRING(30),
    },
    username:{
        type: DataTypes.STRING(30),
        allowNull:false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull:false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
    },
}, 
{
    timestamps: false,
});

module.exports = Users;