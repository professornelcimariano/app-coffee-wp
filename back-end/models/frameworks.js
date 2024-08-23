const Sequelize = require('sequelize');
//Conexão com arquivo db que possui a conexão com o banco
const db = require('./db');
//Constante Language recebe a Table frameworks
//https://sequelize.org/v6/manual/model-basics.html

const frameworks = db.define('frameworks',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
//https://sequelize.org/v6/manual/model-basics.html#model-synchronization
// O user.sync() - verifica se a tabela existe, caso não exista, será criada
// frameworks.sync();
frameworks.sync({ alter: true }); // Para fazer alteração na estrutura caso exista
module.exports = frameworks;
