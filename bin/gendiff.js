import { Command } from 'commander';

const program = new Command();
program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format')
    .version('0.0.1', '-V, --version', 'output the version number')
    .parse(process.argv)