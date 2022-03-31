const {Sequelize} = require('sequelize')

//Connect to database
const db = new Sequelize({
    dialect:'postgres',
    host: 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
    username: 'testing',
    password: 'Pruebas%ALI%2020',
    database:'testing_ali_fullstack',
    port: 5432,
    logging:false
});

module.exports = {db}

