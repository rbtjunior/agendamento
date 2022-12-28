const Sequelize = require('sequelize')
const connection = new Sequelize('agendamento','root','Roberto1029',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;