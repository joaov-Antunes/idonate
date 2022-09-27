const Sequelize = require('sequelize')
const bdName = 'Idonate'

const sequelize = new Sequelize(bdName, 'root', 'Jv410551', {
    host: 'localhost',
    dialect: 'mysql',
    query: {raw: true},
});

module.exports = sequelize