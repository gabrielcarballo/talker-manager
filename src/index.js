const express = require('express');
const fs = require('fs/promises');
const { readingTalkers } = require('./utils/readingTalkers')

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Onlinee');
});



app.get('/talker', async (_req, res) => {
  const talkers = await readingTalkers();
  res.status(200).json(talkers);
});
