const args = process.argv.slice(2);
const [name] = args;

if (name === undefined) {
  console.error('please pass a name, e.g. node hello.js Randy ');
  process.exit(0);
}

console.log(`Good day to you, ${name}`);

