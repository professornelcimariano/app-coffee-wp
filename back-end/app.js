const express = require("express"); // Importando o express
const app = express(); // Iniciando o express, passando o express pra variável app
app.use(express.json());
const port = 4000;

// Importe da conexão com o banco de dados
//const db = require('./models/db')
const languages = require('./models/languages')
const frameworks = require('./models/frameworks')
var cors = require('cors')
/**
 * Configuração do middleware Express.js para habilitar o CORS (Cross-Origin Resource Sharing) em uma aplicação Node.js
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors());
    next();
});

app.get('/', (req, res) => {
    res.send('Rota Inicial Node App Coffe WP')
})

app.get('/about', async (req, res) => {
    res.json({
        "id": 1,
        "name": "Coffee With Programation",
        "Description": "O Aplicativo 'Coffee With Programation' - Professor Nelci Mariano, é um app desenvolvido em React-Nativo cujo o objetivo é ser um material de consulta para os alunos que tem aula de Programação Mobile comigo, a idéia é permitir que esses acessem ao Projeto via GitHub e verifiquem a codificação deste, servindo de referência para a criação de seus Projetos Mobile"
    })
})


// Requisição com axios

const path = require('path'); // Configuração para acessar o arquivo products.json
const axios = require('axios');
// Servindo arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public'))); // Configuração para acessar o arquivo products.json na pasta pública
app.use(express.json()); // para lidar com JSON
app.use(express.urlencoded({ extended: true }));

// npm install axios
// crie a const axios na parte de cima -> const axios = require('axios');
// http://localhost:4000/produtos
app.get("/coffeeparings", function (req, res) {
  axios.get('http://localhost:'+port+'/coffeeparings.json')
    .then(response => {
      res.json(response.data);      
    })
    .catch(error => {
      res.status(500).send('Erro ao ler o arquivo');
    });

});

/*
A função de callback "response" acima, é chamada quando a promessa retornada por axios.get é resolvida. 
O valor response é passado para esta função, e ele contém a resposta da solicitação HTTP feita com o Axios.

O objeto response tem várias propriedades úteis, incluindo:

response.data: os dados retornados pelo servidor. No seu caso, isso seria o conteúdo do arquivo products.json.
response.status: o código de status HTTP da resposta.
response.statusText: a mensagem de status HTTP da resposta.
response.headers: os cabeçalhos da resposta.
response.config: a configuração que foi usada para fazer a solicitação.
*/


//Retorna um produto específico
//http://localhost:4000/produtos/1
app.get("/coffeeparing/:id", function (req, res) { // Define uma rota que recebe um parâmetro id
  axios.get('http://localhost:'+port+'/coffeeparings.json') // Faz uma solicitação GET para o arquivo products.json
    .then(response => { // função de callback que é chamada quando a promessa retornada. A resposta da solicitação é passada para esta função.
      // const {listProduct} = response.data; //extrai a lista de produtos dos dados da resposta.
      const listProduct = response.data.listProduct; //extrai a lista de produtos dos dados da resposta.
      // const {id} = req.params; //extrai o parâmetro id da URL
      const id = req.params.id; //extrai o parâmetro id da URL
      const product = listProduct.find(product => product.id == id); // Procura o produto com o ID correspondente no array listProduct
      res.json(product);
    })
    .catch(error => {
      res.status(500).send('Erro ao ler o arquivo');
    });
});

// SELECT languages
app.get("/select-languages", async (req, res) => { //async define uma função assíncrona
    await languages.findAll({ // await na função assincrona indica o ponto a ser aguardado
        attributes: ['id', 'name', 'description'], //Indica as colunas
        order: [['id', 'ASC']] //order by
    })
        .then((languages) => { // then -> recebe uma função callback, retorna um "objeto-promessa"
            return res.json({
                erro: false,
                languages
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum registro encontrado!"
            });
        });
});

app.get("/select-language/:id", async (req, res) => {
    const languageId = req.params.id; // Capta o id da url

    try {
        const language = await languages.findOne({
            where: { id: languageId }, 
            attributes: ['id', 'name', 'description'],
        });

        if (language) {
            return res.json({
                erro: false,
                language, // Retorna o idioma encontrado
            });
        } else {
            return res.status(404).json({
                erro: true,
                mensagem: "Erro: Idioma não encontrado!",
            });
        }
    } catch (error) {
        return res.status(500).json({
            erro: true,
            mensagem: "Erro: Não foi possível buscar o idioma!",
        });
    }
});

// Frameworks

// SELECT Frameworks
app.get("/select-frameworks", async (req, res) => { //async define uma função assíncrona
    await frameworks.findAll({ // await na função assincrona indica o ponto a ser aguardado
        attributes: ['id', 'name', 'description'], //Indica as colunas
        order: [['id', 'ASC']] //order by
    })
        .then((frameworks) => { // then -> recebe uma função callback, retorna um "objeto-promessa"
            return res.json({
                erro: false,
                frameworks
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum registro encontrado!"
            });
        });
});

app.get("/select-framework/:id", async (req, res) => {
    const languageId = req.params.id; // Capta o id da url

    try {
        const framework = await frameworks.findOne({
            where: { id: languageId }, 
            attributes: ['id', 'name', 'description'],
        });

        if (framework) {
            return res.json({
                erro: false,
                framework, // Retorna o idioma encontrado
            });
        } else {
            return res.status(404).json({
                erro: true,
                mensagem: "Erro: Idioma não encontrado!",
            });
        }
    } catch (error) {
        return res.status(500).json({
            erro: true,
            mensagem: "Erro: Não foi possível buscar o idioma!",
        });
    }
});




// Iniciando o Servidor - Sempre ficará no final da codificação
app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})
