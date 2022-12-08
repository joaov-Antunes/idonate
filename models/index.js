const Client = require('./user');
const Ong = require('./ong');
const Post = require('./post');
const Chat = require('./chat');

const Models = {
    Client,
    Ong,
    Post,
    Chat,
};

Ong.hasMany(Post, {
    constraint: true,
    foreignKey: 'id',
});

Post.belongsTo(Ong, {
    constraint: true,
    foreignKey: 'IdOng'
});

Client.hasMany(Post, {
    constraint: true,
    foreignKey: 'id',
});

Post.belongsTo(Client, {
    constraint: true,
    foreignKey: 'IdUser'
});

Chat.belongsTo(Ong, {
    constraint: true,
    foreignKey: 'IdOng'
});

Ong.hasMany(Chat, {
    constraint: true,
    foreignKey: 'MessageId',
});

module.exports = Models;