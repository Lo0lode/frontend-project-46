const { Command } = require('commander');
import genDiff from '../index.js';
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((pathOne, pathTwo) => {
    const diff = genDiff(pathOne, pathTwo, program.opts().format);
    console.log(diff);
  });
program.parse(process.argv);