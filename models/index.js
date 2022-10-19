const Client = require('./user');
const Ong = require('./ong');
const Post = require('./post');

const Models = {
    Client,
    Ong,
    Post,
};

Ong.hasMany(Post, {
    constraint: true,
    foreignKey: 'IdPost',
});

Post.belongsTo(Ong, {
    constraint: true,
    foreignKey: 'IdOng'
});

module.exports = Models;