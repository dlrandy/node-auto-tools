const shell = require('shelljs');
const readLineSync = require('readline-sync');
const path = require('path');
const { repository } = require('./config.json');

const {
  delivery, baseBranch
} = repository;

const repoName = delivery.substring(delivery.lastIndexOf('/'));

const repoPath = path.join(__dirname, repoName);
shell.cd(repoPath);

shell.exec(`git checkout ${baseBranch}`);

const ticketId = readLineSync.question(`
新分支取名为？
`, {
  limit: input => input.trim().length > 0,
  limitMessage: '请输入分支名 (get-123)'
});
shell.exec(`git checkout -b ${ticketId}`);
