const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Agendamento = require('./database/Agendamento')

//carregando ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

//carregando body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//database
connection.authenticate().then(() => {
    console.log("Conectado com BD")
}).catch((msgerro) => {
    console.log(msgerro)
})

//rotas
app.get('/agendados', (req, res) => {
    Agendamento.findAll({ raw: true }).then(agendados => {
        res.render('agendados',{
            agendados: agendados
        })
    })
})
app.get('/', (req, res) => {
    res.render('index')
})
app.post('/formularioEnviado', (req, res) => {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var data = req.body.data;
    var hora = req.body.hora;
    Agendamento.create({
        nome: nome,
        sobrenome: sobrenome,
        data: data,
        hora: hora
    }).then(() => {
        res.redirect("/")
    })
})

app.listen(5000);
