const fs = require('fs');
const readLine = require('readline');
const { stdin, stdout } = require('process');
const path = require('path');

const onProjectInput = (name) => {
  interfaceInstance.close();
  stdin.destroy();
  createProjectDirectory(name);
};

const createProjectDirectory = (enteredName) => {
  const name = enteredName.trim();
  if (name === '') {
    console.log('没有名字不能创建项目');
    process.exit(0);
  }
  const projectPath = path.join(__dirname, name);
  if (fs.existsSync(projectPath)) {
    console.log(`${name} 已经存在`);
    process.exit(0);
  }
  console.log(`新项目名为 ${name}`);
  fs.mkdirSync(projectPath);
};
const interfaceInstance = readLine.createInterface(stdin, stdout);
interfaceInstance.question('项目名字是？', onProjectInput);
