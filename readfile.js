const fs = require('fs');

fs.readFile('alicequotes.txt', 'UTF8', (error, file) => {
  console.log(file);
});