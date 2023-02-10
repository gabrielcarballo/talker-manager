const fs = require('fs/promises');

const readingTalkers = async () => {
  const data = await fs.readFile('src/talker.json', 'utf-8');
  const talkers = JSON.parse(data);
  return talkers;
}

module.exports = {
  readingTalkers,
}