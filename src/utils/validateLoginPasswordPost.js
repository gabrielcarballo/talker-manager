const validateLoginPasswordPost = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length === 0) {
    res.status(400).send({ message: 'O campo "password" é obrigatório' });
  } else if (password.length < 5) {
    res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  } else {
    next();
  }
};

module.exports = { validateLoginPasswordPost };