import {Command} from "commander";
import genDiff from '../src/index.js'

const program = new Command();
program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format')
    .action((pathOne, pathTwo) => {
        const diff = genDiff(pathOne, pathTwo, program.opts().format);
        console.log(diff);
      });
    program.parse(process.argv)