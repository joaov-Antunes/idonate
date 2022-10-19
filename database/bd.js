const Sequelize = require('sequelize');
//Conexão com banco de dados
const bdName = 'Idonate';

const sequelize = new Sequelize(bdName, 'root', 'Jv410551', {
    host: 'localhost',
    dialect: 'mysql',
    query: {raw: true},
});

module.exports = sequelize