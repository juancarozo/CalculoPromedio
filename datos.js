const nombre = {
	alias: "n",
	demand: true
}
const matemáticas = {
	alias: "m",
	demand: true
}
const inglés = {
	alias: "i",
	demand: true
}
const programación = {
	alias: "p",
	demand: true
}
const promedio = {
	alias: "pr",
}

const creación = {
	nombre,
	matemáticas,
	inglés,
	programación,
	promedio
}

const obtenerpromedio = {
	nombre
}

const argv = require ('yargs')
			.command ('crear', 'Crear un Estudiante', creación)
			.command ('obtenerpromedio', 'Calcula promedio', obtenerpromedio)
			.argv

module.exports = {
	argv
}			
