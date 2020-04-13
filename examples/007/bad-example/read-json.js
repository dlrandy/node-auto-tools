const fs = require('fs');

const readJson = file => new Promise((resolve, reject) => {
  fs.readFile(file, { encoding: 'UTF-8' }, (err, data) => {
    if (err) {
      return reject(err);
    }
    resolve(JSON.parse(data));
  });
});
readJson(`${__dirname}/../data/example-config.json`)
  .then(config => console.log(config.projectId));
