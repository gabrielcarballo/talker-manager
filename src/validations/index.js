const { 
  validateLoginPasswordPost,
  validateloginEmailPost, 
  } = require('./validateLoginPost'); 
  const {
  isTokenValid,
  isNameValid,
  isValidAge,
  isValidTalk,
  isValidTalkRateObject,
  isValidTalkWatchedAtObject,
  } = require('./validateTalkerPost');

  module.exports = {
validateLoginPasswordPost,
validateloginEmailPost,
isTokenValid,
isNameValid,
isValidAge,
isValidTalk,
isValidTalkRateObject,
isValidTalkWatchedAtObject,
  };