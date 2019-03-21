const {argv} = require ('./datos.js');
const funciones = require('./funciones.js');

let comando = argv._[0];
switch (comando) {
	case 'crear':
	funciones.crear(argv);
	break

	case 'mostrar':
	funciones.mostrar();
	break

	case 'obtenerpromedio':
	funciones.obtenerpromedio(argv.nombre);
	break

	case 'mejores':
	funciones.mejores();
	break

	default:
	console.log('o ingresó ninguna función existente');
}


