const { Command } = require('commander');
const program = new Command();

program
  .version('0.8.0')
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((pathOne, pathTwo) => {
    const diff = genDiff(pathOne, pathTwo, program.opts().format);
    console.log(diff);
  })
program.parse(process.argv);