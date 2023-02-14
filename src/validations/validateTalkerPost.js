const isTokenValid = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
 return res.status(401)
.json({ message: 'Token não encontrado' }); 
}
  if ((authorization.length === 16 && typeof authorization === 'string') === false) {
 return res.status(401)
.json({ message: 'Token inválido' }); 
}
  next();
};

const isNameValid = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if ((name.length >= 3) === false) {
 return res.status(400)
.json({ message: 'O "name" deve ter pelo menos 3 caracteres' }); 
}
  next();
};

const isValidAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
 return res.status(400)
.json({ message: 'O campo "age" é obrigatório' }); 
}
  if (typeof age !== 'number') {
 return res.status(400)
.json({ message: 'O campo "age" deve ser do tipo "number"' }); 
}
  if (!(Number.isInteger(age))) {
 return res.status(400)
.json({ message: 'O campo "age" deve ser um "number" do tipo inteiro' }); 
}
  if (age < 18) {
 return res.status(400)
.json({ message: 'A pessoa palestrante deve ser maior de idade' }); 
}
  next();
};

const isValidTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  next();
};

const isValidTalkWatchedAtObject = async (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const dateCondition = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!watchedAt) {
 return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' }); 
}
  if (!dateCondition.test(watchedAt)) {
 return res.status(400)
.json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' }); 
}
next();
};

const isValidTalkRateObject = async (req, res, next) => {
  const { talk: { rate } } = req.body;
  const rateCondition = Number.isInteger(rate) && (rate > 0) && (rate <= 5);
  if (rate === undefined) {
    return res.status(400)
   .json({ message: 'O campo "rate" é obrigatório' }); 
   }
     if (!rateCondition) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' }); 
   }
   next();
};
module.exports = {
  isTokenValid,
  isNameValid,
  isValidAge,
  isValidTalk,
  isValidTalkWatchedAtObject,
  isValidTalkRateObject,
};