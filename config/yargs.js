const { describe } = require('yargs');

const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe: 'Muestra la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            describe: 'Muestra hasta donde se desea ver la tabla'
        }
    })
    .check((argv, options) => {
        if ( isNaN(argv.b) ) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;