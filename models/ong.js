const DataTypes = require('sequelize');
const bd = require('../database/bd');
const Post = require('./post');

const Ong = bd.define('Ong', {
    OngId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    ownerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    OngName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CNDT: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CellphoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profileImage: {
        type: DataTypes.BLOB,
        allowNull: true
    }
});
module.exports = Ong;