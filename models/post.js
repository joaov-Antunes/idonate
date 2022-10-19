const bd = require('../database/bd');
const DataTypes = require('sequelize');

const Post = bd.define('Post', {
    ImageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Caption: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = Post;
