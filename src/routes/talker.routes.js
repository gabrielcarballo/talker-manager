const express = require('express');
const fs = require('fs/promises');
const {
  isNameValid,
  isTokenValid,
  isValidAge,
  isValidTalk,
  isValidTalkRateObject,
  isValidTalkWatchedAtObject,
} = require('../validations');
const { readingTalkers, writingTalkers } = require('../utils');

const talkerRoutes = express.Router();

const talkerSearchGET = talkerRoutes.get('/',
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

const talkerPOST = talkerRoutes.post('/',
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

const talkerIdPUT = talkerRoutes.put('/:id',
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

const talkerIdDELETE = talkerRoutes.delete('/:id',
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

  module.exports = {
    talkerIdDELETE,
    talkerIdPUT,
    talkerPOST,
    talkerSearchGET,
  };