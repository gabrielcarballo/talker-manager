const express = require('express');
const loginRoute = require('./routes/login.route');
const {
  talkerIdDELETE,
  talkerIdPUT,
  talkerPOST,
  talkerSearchGET,
} = require('./routes/talker.routes');
const { talkerGET } = require('./routes/talkerGet.route');
const { talkerIDGET } = require('./routes/talkerIdGet.route');
const { isTokenValid } = require('./validations');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

//switch case aqui ficaria mais organizado ou seria ruim para manutenção ?
app.use('/talker/search', isTokenValid, talkerSearchGET);

app.use('/', talkerIDGET);
//rota :id não entende id como parâmetro e recebe /qqcoisa/:id
app.use('/talker', talkerGET);

app.use('/talker', talkerPOST);

app.use('/talker/:id', talkerIdPUT); //contraste

app.use('/talker/:id', talkerIdDELETE);

app.use('/login', loginRoute);
