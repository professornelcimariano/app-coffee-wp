const express = require("express"); // Importando o express
const app = express(); // Iniciando o express, passando o express pra variável app
app.use(express.json());
// Importe da conexão com o banco de dados
//const db = require('./models/db')
const languages = require('./models/languages')







// Iniciando o Servidor - Sempre ficará no final da codificação
app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})
