const isTokenValid = (req, res, next) => {
  const { authorization } = req.headers;
  const tokenCondition = authorization.length === 16 && typeof authorization === 'string';
  if(!authorization) return res.status(401).json({"message": "Token não encontrado" });
  if(!tokenCondition) return res.status(401).json({"message": "Token inválido"})
  if(authorization && tokenCondition) next();
};

const isNameValid = (req, res, next) => {

};

module.exports = {
isTokenValid,
};