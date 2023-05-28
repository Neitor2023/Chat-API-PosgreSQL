const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Conversations = db.define('conversations', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    createById: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'createBy_id'
    },
    title:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    type_couple:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
},
{
    timestamps: false,
});

module.exports = Conversations;

// {
//     "createById":"1";
//     "title":"",
//     "type_couple": true
// }