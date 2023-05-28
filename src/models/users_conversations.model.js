const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Users_conversations = db.define('users_conversations', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    participantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'participant_id'
    },
    conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'conversation_id'
    },
},
{
    timestamps: false,
});

module.exports = Users_conversations;

// {
//     "participantId":"2",
//     "conversationId":"1"
// }
