const bd = require('../database/bd');
const DataTypes = require('sequelize');

const Chat = bd.define('Chat', {
    MessageId: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Message: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Chat;