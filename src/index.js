const express = require('express');
const fs = require('fs/promises');
const loginRoute = require('./routes/login.route');
const { readingTalkers, writingTalkers } = require('./utils');
const {
isNameValid,
isTokenValid,
isValidAge,
isValidTalk,
isValidTalkRateObject,
isValidTalkWatchedAtObject,
validateLoginPasswordPost,
validateloginEmailPost,
} = require('./validations');

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

app.get('/talker/search',
isTokenValid,
 async (req, res) => {
  const { q } = req.query;
  const talkers = await readingTalkers();
  const data = talkers.filter((e) => e.name.includes(q));
  if (!q || q === '') {
    res.status(200).json(talkers);
  } else {
    res.status(200).json(data);
  }
});

app.get('/talker', async (_req, res) => {
  const talkers = await readingTalkers();
  res.status(200).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readingTalkers();
  const data = talkers.find((e) => e.id === Number(id));
  if (!data) res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(data);
});

app.use('/login', loginRoute);

app.post('/talker', 
isTokenValid,
isNameValid,
isValidAge,
isValidTalk,
isValidTalkRateObject,
isValidTalkWatchedAtObject,
 async (req, res) => {
  const talkers = req.body;
  const allTalkers = await readingTalkers();
  const finalData = {
    id: allTalkers.length + 1,
    ...talkers,
  };
  await writingTalkers(finalData);
  return res.status(201).json(finalData);
});

app.put('/talker/:id', 
isTokenValid,
isNameValid,
isValidAge,
isValidTalk,
isValidTalkRateObject,
isValidTalkWatchedAtObject,
 async (req, res) => {
  try {
    const { id } = req.params;
    const dataToChange = req.body;
    const talkers = await readingTalkers();
    const data = talkers.findIndex((e) => e.id === Number(id));
    talkers[data] = {
      id: Number(id),
      ...dataToChange,
    };
    await fs.writeFile('src/talker.json', JSON.stringify(talkers));
    res.status(200).json(talkers[data]);
  } catch (error) {
    res.status(500).send({ message: error });
  }
 });

app.delete('/talker/:id',
isTokenValid,
async (req, res) => {
  try {
    const { id } = req.params;
    const talkers = await readingTalkers();
    const data = talkers.filter((e) => e.id !== Number(id));
    await fs.writeFile('src/talker.json', JSON.stringify(data));
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error });
  }
});
