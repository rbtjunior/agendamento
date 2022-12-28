const Sequelize = require('sequelize');
const connection = require('./database');

const Agendamento = connection.define('agendamento', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    hora: {
        type: Sequelize.TIME,
        allowNull: false
    }
})
Agendamento.sync({ force: false }).then(() => { })
module.exports = Agendamento;