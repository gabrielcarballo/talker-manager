const express = require('express');
const fs = require('fs/promises');
const crypto = require('crypto');
const { readingTalkers } = require('./utils/readingTalkers');
const { validateLoginPasswordPost, validateloginEmailPost } = require('./utils/validateLoginPost'); 
const {
isTokenValid,
isNameValid,
isValidAge,
isValidTalk,
} = require('./utils/validateTalkerPost');


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

app.get('/talker', async (_req, res) => {
  const talkers = await readingTalkers();
  console.log(talkers.token);
  res.status(200).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readingTalkers();
  const data = talkers.find((e) => e.id === Number(id));
  if (!data) res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(data);
});

app.post('/login', validateloginEmailPost, validateLoginPasswordPost, async (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).send({ token });
});

app.post('/talker', isTokenValid, isNameValid, isValidAge, isValidTalk, async(req, res) => {
  const talkers = req.body;
  res.send(talkers)

});

