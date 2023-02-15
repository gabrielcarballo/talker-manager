const fs = require('fs/promises');
const { readingTalkers } = require('../utils/readingTalkers');

const editingTalkers = async (info) => {
  try {
    const disposal = await readingTalkers();
    disposal.push(info);
    await fs.writeFile('src/talker.json', JSON.stringify(disposal));
  } catch (error) {
    return null;
  }
};

module.exports = { editingTalkers };