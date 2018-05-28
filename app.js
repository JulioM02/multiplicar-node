const { crearArchivo } = require('./multiplicar/multiplicar.js')
const { tabla } = require('./multiplicar/multiplicar.js')
const colors = require('colors')
const argv = require('yargs')

.command('listar', 'escribe la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            demand: true,
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv
let argv2 = process.argv
    // let parametro = argv2[2];
    // let base = parametro.split('=')[1]
    // 
    //console.log(argv)
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        break;
    case 'crear':
        tabla(argv.base, argv.limite)
            .then(resp => console.log(`Archivo creado ${resp.green}`))
            .catch(err => console.log(err))
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}
// console.log(argv2);
// console.log(argv.base)
// console.log(argv.b)



// crearArchivo(base)
//     .then()