const fs = require('fs/promises');
const { readingTalkers } = require('./readingTalkers');

const writingTalkers = async (info) => {
  try {
    const disposal = await readingTalkers();
    disposal.push(info);
    await fs.writeFile('src/talker.json', JSON.stringify(disposal));
  } catch (error) {
    return null;
  }
};

module.exports = { writingTalkers };