const path = require('path');

const showHomepage = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
};

module.exports = { showHomepage };
