const express = require('express');
const routes = require('./routes');
const cors = require('cors');


var port = process.env.PORT || 8080;

const app = express();

// use json to requests
app.use(express.json());
app.use(routes);
app.use(cors());
app.get('/', (req,res) => res.send('Hello world!'));
app.listen(port, () => console.log('Server Running.'));






/* Rotas */

/**
 *  
 * Métodos HTTP 
 * GET - buscar qualquer tipo de informação do backend
 * POST - Criar uma informação no backend
 * PUT - alterar alguma informação no backend
 * DELETE - deletar alguma informação no backend
 * 
 * */

 /**
  * 
  * Tipos de Parâmetros
  * Query:        parâmetro nomeado nas rotas após o símbolo de interrogação (filtros, paginação) exemplo: app.get('/users?name=rodrigo&idade=25')
  * Route Params: parâmetros utilizados para identificar recursos    exemplo: app.get('/users/:id')
  * Request body: corpo da requisição, utilizado para criar ou alterar recursos
  */


/**
 * SQL: MySql, SQLite, PostgreSQL, Oracle
 * NoSQl: MongoDB, CouchDB , DynamoDB e etc...
 *  
*/

/**
 * Driver: select * from users;
 * Query Builder: table('users').select('*').where()
*/
  




app.listen(3333);