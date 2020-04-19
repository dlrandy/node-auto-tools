require('colors');
const readLineSync = require('readline-sync');
const path = require('path');
const fse = require('fs-extra');

const GAME_TEMPLATES = 'game-templates';
const NO_CHOICE_MADE = -1;
const templatesDir = path.join(__dirname, GAME_TEMPLATES);
const templates = fse.readdirSync(templatesDir);

const index = readLineSync.keyInSelect(templates);

if (index === NO_CHOICE_MADE) {
  process.exit(0);
}

const projectName = readLineSync.question('游戏的额名字是：?', {
  limit: input => input.trim().length > 0,
  limitMessage: '必须要有名字'
});

const confirm = readLineSync.keyInYN(`你输入的${projectName}?`);

if (confirm) {
  const template = templates[index];
  const src = path.join(templatesDir, template);
  const destination = path.join(__dirname, projectName);
  fse.copy(src, destination)
    .then(() => console.log(`成功创建了${destination}`.green))
    .catch(err => console.error(err));
} else {
  console.log('终止穿件新游戏');
}

