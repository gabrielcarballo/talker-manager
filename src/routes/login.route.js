const express = require('express');
const { validateloginEmailPost,
  validateLoginPasswordPost,
} = require('../validations')
const crypto = require('crypto');

const loginRoute = express.Router();

loginRoute.post('/', validateloginEmailPost, validateLoginPasswordPost, async (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).send({ token });
});

module.exports = loginRoute;