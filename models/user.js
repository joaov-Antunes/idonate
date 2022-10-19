const DataTypes = require('sequelize');
const bd = require('../database/bd');

/*
    Modelo da tabela clientes onde são armazenados os dados 
    de login e cadastro de clientes comuns (que não são ONGs)
*/

const Cliente = bd.define('Cliente', {
    ClientId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
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
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    cellphoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Cliente