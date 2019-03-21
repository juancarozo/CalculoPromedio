const fs = require ('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
	listar ();
	let est = {	
		nombre: estudiante.n,
		matemáticas: estudiante.m,
		inglés: estudiante.i,
		programación: estudiante.p,
		promedio: (estudiante.m + estudiante.i + estudiante.p)/3
	};
	let duplicado = listaEstudiantes.find ( nom => nom.nombre == est.nombre);
	if (!duplicado) {
		listaEstudiantes.push(est);
		console.log(listaEstudiantes);
		guardar();
	}
	else 
		console.log("Ya existe otro estudiante con ese nombre");
}

const listar = () => {
	try {
	listaEstudiantes = JSON.parse (fs.readFileSync('listado.json'))
	} catch (error) {
		listaEstudiantes = [];
	}
}

const guardar = () => {
	let datos = JSON.stringify(listaEstudiantes);
	fs.writeFile('listado.json', datos, (err)=> {
		if (err) throw (err);
		console.log('Archivo creado con éxito');
	});
}

const mostrar = () => {
	listar ()
	console.log('Notas de los estudiantes');
	listaEstudiantes.forEach ( estudiante => {
		console.log(estudiante.nombre);
		console.log('notas')
		console.log('matemáticas '+estudiante.matemáticas);
		console.log('inglés '+estudiante.inglés);
		console.log('programación '+ estudiante.programación);
		console.log('promedio' +  estudiante.promedio +  '\n');
	})
}

const obtenerpromedio = (nom) => {
	listar()
	let est = listaEstudiantes.find (buscar => buscar.nombre == nom);
	if (!est) {
		console.log('El estudiante no existe');
	}
	else {
		console.log ('El promedio del alumno '+ est.nombre +' es '+est.promedio)
	}	
}

const mejores = () => {
	listar()
	let ganan = listaEstudiantes.filter (prom => prom.promedio >= 3);
	if (ganan.length == 0) {
		console.log('Ningún estudiante tiene un promedio mayor o igual a 3');
	}
	else
		ganan.forEach ( estudiante => {
		console.log(estudiante.nombre);
		console.log('promedio')
		console.log(estudiante.promedio);
		})
}



module.exports = {
	crear,
	mostrar,
	obtenerpromedio,
	mejores
}