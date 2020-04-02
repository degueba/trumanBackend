const express = require('express');
const routes = require('./routes');
const cors = require('cors');


var port = process.env.PORT || 8080; //3333

const app = express();

// use json to requests
app.use(express.json());
app.use(routes);
app.use(cors());
app.get('/', (req,res) => res.send('Hello truman!'));
app.listen(port, () => console.log('Server Running.'));