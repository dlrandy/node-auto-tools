const argv = require('minimist')(process.argv.slice(2));

console.log('argv ', argv, process.argv);
const readLineSync = require('readline-sync');

const NO_CHOICE_MADE = -1;

let { name, template, ticket } = argv;
console.log('name, template, ticket ', name, template, ticket);
const templates = ['pick-of-three', 'tic-tac-toe', 'spin-the-wheel'];

if (name === undefined) {
  name = readLineSync.question('What is the name of the new game? ', {
    limit: input => input.trim().length > 0,
    limitMessage: 'The game must have a name'
  });
}

if (template === undefined || !templates.includes(template)) {
  const templateIndex = readLineSync.keyInSelect(templates, 'Choose your template');
  if (templateIndex === NO_CHOICE_MADE) {
    console.log('No template chosen. Stopping execution.');
    process.exit(0);
  }
  template = templates[templateIndex];
}

if (ticket === undefined || ticket.indexOf('GS-')) {
  ticket = `GS-${readLineSync.question('Enter ticket number: GS-', {
    limit: input => input.trim().length > 0,
    limitMessage: 'Cannot continue without a ticket number'
  })}`;
}

console.log(`Creating game '${name}' with template '${template}' on branch '${ticket}'`);
