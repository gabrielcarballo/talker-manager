const express = require('express');
const { readingTalkers } = require('../utils');

const route = express.Router();

const talkerIDGET = route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readingTalkers();
  const data = talkers.find((e) => e.id === Number(id));
  if (!data) res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(data);
});

module.exports = {
  talkerIDGET,
};