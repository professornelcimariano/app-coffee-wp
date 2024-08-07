// https://sequelize.org/docs/v6/getting-started/
const Sequelize = require('sequelize');
// Credenciais
// o timestamps: false impede que o sequelize crie os campos de data de criação e data de edição nas tabelas
const sequelize = new Sequelize('app_coffee_wp', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    define: {
        timestamps: false
    }
});

// https://sequelize.org/docs/v6/getting-started/
sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
});

module.exports = sequelize;