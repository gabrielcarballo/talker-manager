const validateloginEmailPost = (req, res, next) => {
  const { email } = req.body;
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
// se n satisfazer, chama o erro. Se sim, next()
  if (!email || email.length === 0) {
    res.status(400).send({ message: 'O campo "email" é obrigatório' });
  } else if (!regEx.test(email)) {
    res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
  } else {
    next();
  }
};

module.exports = { validateloginEmailPost };