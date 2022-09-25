const Sequelize = require('sequelize')
const bdName = 'Idonate'

const sequelize = new Sequelize(bdName, 'root', 'Jv410551', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize