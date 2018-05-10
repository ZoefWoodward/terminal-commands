const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (err) => {
  fs.writeFile('terminal-commands.js', (err) => {
      if (err) throw err;
      console.log('Success!');
  })
};

module.exports.mkdir = () => {
  fs.mkdir('./terminal-commands', (err, files) => {
    if (err) throw err;
  console.log('Directory created');
})
};
