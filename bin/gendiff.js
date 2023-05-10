import {Command} from "commander";
import genDiff from '../src/index.js'

const program = new Command();
program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format')
    .argument("<filetype1>")
    .argument("<filetype2>")
    .action((filetype1, filetype2) => {
      genDiff(filetype1, filetype2);
    });
    program.parse(process.argv)