const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bd = require('./database/bd');
const { Client, Ong } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
    let response =  await Client.findOne({
        where: {email: req.body.email, password: req.body.password}
    });
    if(response == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response)
    }
});

app.get ('/', (req, res) => {
    res.send('Meu servidor backend já está rodando.')
});

app.get('/create', async(req, res) => {
    let create = await Client.create({
        name: 'João',
        cpf: 12345678910,
        email: 'joaovicente399544@gmail.com',
        password: 'SenhaTeste123',
        age: 17,
        cellphoneNumber: 11123567890,
        userName: 'BGD'
    });
    res.send('usuário criado com sucesso!')
});

async function bdConnect() {
    try {
        await bd.authenticate();
        console.log('Banco de dados conectado com sucesso!');
        return true
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false
      }
};

// async function syncModels() {
//     await Client.sync()
// }

// if(bdConnect) {
//     syncModels({ alter: true }).
//     then(() => {
//         console.log('Modelo sincronizado com sucesso!');
//     }).
//     catch((error) => {
//         console.error(error);
//     });
// };

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`servidor rodando na url http://localhost:${port}`);
    bdConnect();
});