const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Messages = db.define('messages', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'conversation_id'
    },
    createById: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'createBy_id'
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false
    },
},
{
    timestamps: false,
});

module.exports = Messages;

// {
//     "conversationId":"",
//     "createById":"",
//     "content":""
// }