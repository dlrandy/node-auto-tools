require('colors');

const path = require('path');
const shell = require('shelljs');

const {
  repositories
} = require('./config.json');

const repositoriesDirectory = path.join(__dirname, 'my-repositories');

function cloneRepositories(repositoryPath, repositoryList = []) {
  const repositoryCount = repositoryList.length;
  if (!repositoryPath || repositoryCount === 0) {
    console.log('Invalid path or repository list');
    return;
  }
  console.log(`Cloing repositories to: ${repositoriesDirectory}`.blue);
  shell.cd(repositoryPath);
  repositoryList.forEach((url, index) => {
    console.log(`Cloning ${index + 1} of ${repositoryCount}`.cyan);
    shell.exec(`git clone ${url} --progress -b master`);
  });
  console.log('Completed cloning of repositories'.green);
}
cloneRepositories(repositoriesDirectory, repositories);
