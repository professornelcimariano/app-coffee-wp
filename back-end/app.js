const express = require("express"); // Importando o express
const app = express(); // Iniciando o express, passando o express pra variável app
app.use(express.json());
// Importe da conexão com o banco de dados
//const db = require('./models/db')
const languages = require('./models/languages')


app.get('/', (req, res) => {
    res.send('Rota Inicial Node App Coffe WP')
})

app.get('/sobre', (req, res) => {
    res.json({
        "id": 1,
        "name": "Curso de Informática",
        "Description": "O Aplicativo Coffee With Programation (Professor Nelci Mariano) é um app desenvolvido em React-Nativo cujo o objetivo é ser um material de consulta para todos os alunos que tem aula de Programação Mobile comigo, a idéia é permitir que os alunos tenha acesso ao Projeto através do Git Hub e assim verificar na prática através da codificação como desenvolver seus projetos de app."
    })
})




// Iniciando o Servidor - Sempre ficará no final da codificação
app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})
