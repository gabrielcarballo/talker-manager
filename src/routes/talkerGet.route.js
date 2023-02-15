const express = require('express');
const { readingTalkers } = require('../utils');

const talkerGetRoute = express.Router();

const talkerGET = talkerGetRoute.get('/', async (_req, res) => {
  const talkers = await readingTalkers();
  res.status(200).json(talkers);
});

module.exports = {
  talkerGET,
};