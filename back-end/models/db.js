let Sequelize = require('sequelize');
let config = require('../configuration.json');

const sequelize = new Sequelize(
    'wb_transport',
    config.db_user,
    '',
    {
        dialect: 'mssql',
        database: 'wb_transport', 
        username: 'sa', 
        host: "localhost",
        port: '1433', 
        password: 'Password123', 
        charset: 'utf8',
        collate: 'utf8_general_ci',
        define: {
           timestamps: false
        }
    }
);

module.exports = sequelize;