const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bd = require('./database/bd');
const { Client, Ong, Post } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Verifica se os dados de login estão corretos de acordo com os existentes no BD, chamada no arquivo "loginUSer.jsx"

app.post('/login', async (req, res) => {
    const response =  await Client.findOne({
        where: {email: req.body.email, password: req.body.password}
    });
    if(response == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
});

app.post('/loginong', async (req, res) => {
    const response = await Ong.findOne({
        where: {email: req.body.email, password: req.body.password}
    });
    if(response == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
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

app.post('/finishpost', async(req, res) => {
    let response = await Post.create({
        ImageUrl: req.body.ImageUrl,
        Caption: 'Legenda teste'
    });
    if (response == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    };
});

app.get('/profile', async(req, res) => {
    const response =  await Client.findOne({
        where: {email: req.body.email, password: req.body.password}
    });

    if(response == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    };
});

app.get('/islogged', async(req, res) => {
    let response =  await Client.findOne({
        where: {email: req.body.email, password: req.body.password}
    });

    if(response == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    };
});

app.get ('/', (req, res) => {
    res.send('Meu servidor backend já está rodando.');
});

//Teste para veerificar se as querys estam funcionando e armazenando os dados no bd.

// app.get('/create', async(req, res) => {
//     let create = await Client.create({
//         name: 'João',
//         cpf: 12345678910,
//         email: 'joaovicente399544@gmail.com',
//         password: 'SenhaTeste123',
//         age: 17,
//         cellphoneNumber: 11123567890,
//         userName: 'BGD'
//     });
//     res.send('usuário criado com sucesso!')
// });

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