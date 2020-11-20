const fs = require('fs');
const phrase = "Why, sometimes I've believed as many as six impossible things before breakfast.";

fs.writeFile('alicequotes.txt', phrase, (error) => {
  console.log('Success');
});