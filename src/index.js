const express = require('express');
const fs = require('fs/promises');

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
  const data = await fs.readFile('src/talker.json', 'utf-8');
  const talkers = JSON.parse(data);
  const emptyArray = [];

  if(talkers !== emptyArray) res.status(200).json(talkers) 
});


