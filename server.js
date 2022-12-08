const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bd = require('./database/bd');
const { Client, Ong, Post, Chat } = require('./models');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const app = express();
const SECRET = 'Mysecret';

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Verifica se os dados de login estão corretos de acordo com os existentes no BD, chamada no arquivo "loginUSer.jsx"

function isLogged(req, res, next) {
    const token = req.headers['x-access-token'];
    if(!token) return res.status(401).send({ auth: false, message: "There aren't any token" });

    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });

        req.userId = decoded.id;
        next();
    });
}

app.post('/login', async (req, res) => {
    const response =  await Client.findOne({
        where: {email: req.body.email, password: req.body.password}
    });

    if(response == null) {
        res.send(JSON.stringify('error'));
        res.status(401).end();
    } else {
        const token = jwt.sign({id: response.id}, SECRET, {expiresIn: 2628002}); // expires in 1 month
        res.status(200).send({response, auth: true, token: token});
        res.send(response);
    };
});

app.post('/logout', async(req, res) => {
    res.status(200).send({ auth: false, token: null });
})

// app.post('/chat', async(req, res) => {
//     const create = await Chat.create({
//         Message: req.body.Message
//     })
//     if(create == null) {
//         res.send(JSON.stringify('error'));
//     } else {
//         res.send(create);
//     }
// })

app.get('/posts', isLogged, async (req, res) => {
    let response = await Post.findAll({
        where: {ImageUrl: req.body.ImageUrl, Caption: req.body.Caption}
    });
    if(response == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
})

app.post('/loginong', async (req, res) => {
    const response = await Ong.findOne({
        where: {email: req.body.email, password: req.body.password}
    });
    if(response == null) {
        res.send(JSON.stringify('error'));
        res.status(401).end();
    } else {
        const token = jwt.sign({id: response.id}, SECRET, {expiresIn: 2628002}); // expires in 1 month
        res.status(200).send({response, auth: true, token: token});
    }
});

//Quando o botão cadastrar é clicado rota post é requsisitada. Rota chamada no arquivo signUpUser.jsx
app.post('/register', async(req, res) => {
    const create = await Client.create({
        name: req.body.name,
        cpf: req.body.cpf,
        email: req.body.email,
        password: req.body.password,
        cellphoneNumber: req.body.number,
        userName: req.body.username
    });
    if(create == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(create);
    };
});

app.post('/registerong', async(req, res) => {
    const create = await Ong.create({
        ownerName: req.body.ownerName,
        cpf: req.body.cpf,
        email: req.body.email,
        OngName: req.body.OngName,
        password: req.body.password,
        CellphoneNumber: req.body.cellphoneNumber
    });
    if(create == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(create);
    }
});

app.post('/finishpost', isLogged, async(req, res) => {
    const response = await Post.create({
        ClientId: req.user.id,
        ImageUrl: req.body.ImageUrl,
        Caption: req.body.caption,
    });
    if (response == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    };
});

app.get('/profile', isLogged, async(req, res) => {
    const response =  await Client.findOne({
        where: {email: req.body.email, password: req.body.password}
    });
    if(response == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    };
});

app.post('/search', async(req, res) => {
    const response = await Ong.findAll({
        where: {OngName: req.body.OngName}
    })
    if(response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    };
})

app.get ('/', (req, res) => {
    res.send('Meu servidor backend já está rodando.');
});

//Calls the authentication
async function bdConnect() {
    try {
        await bd.authenticate();
        console.log('Banco de dados conectado com sucesso!');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false;
    }
};

// Rodar as funções comentadas apenas uma vez para fazer a sincronização das tabelas com o BD;

// async function syncModels() {
//     await Post.sync({ force: true })
// }

// if(bdConnect) {
//     syncModels().
//     then(() => {
//         console.log('Modelo sincronizado com sucesso!');
//     }).
//     catch((error) => {
//         console.error(error);
//     });
// }

//servidor local e porta em que está hospedado

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`servidor rodando na url http://localhost:${port}`);
    bdConnect();
});