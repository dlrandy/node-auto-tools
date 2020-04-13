console.log(`this process is pid ${process.pid}`);

process.on('exit', (code) => {
  console.log(`the process has now finished, exiting with code: ${code}`);
});

process.stdout.write('hello, I am writing to standard output\n');
process.stdout.write(`Current working directory: ${process.cwd()}`);
console.log(`the script has been running for ${process.uptime()}`);
process.stdout.write('Type something then hit enter: \n');

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`you write: ${chunk}`);
    process.exit(0);
  }
});
