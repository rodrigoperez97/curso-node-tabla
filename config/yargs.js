const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .option('x', {
                alias: 'fin',
                type: 'number',
                demandOption: true,
                describe: 'Es la cantidad de numero a multiplicar en la tabla'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero';
                }

                return true;
            })
            .argv;

            module.exports = argv;