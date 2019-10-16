const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-uqowl.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST , PUT, DELETE

// req.query = Acessar query params (Filtrar informações)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (criação, edição)

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '../', 'uploads' )));

app.listen(3333);
