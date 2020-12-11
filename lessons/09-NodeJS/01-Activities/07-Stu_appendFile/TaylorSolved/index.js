const fs = require('fs');

fs.appendFile('message.txt', process.argv[2] + "\n", function (err) {
  if (err) throw err;
  console.log('Saved!');
});