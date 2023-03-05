let nombre = "Facu";
let apellido = "Dev";
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`;
let estudianteMinus = `${nombre.toLowerCase()} ${apellido.toLowerCase()}`;
let cantLetras = estudiante.length;
let primerLetraNombre = nombre[0];
let ultimaLetraApellido = apellido.slice(-1);
let eliminarEspacios = estudiante.replace(" ", "");
let contiene = estudiante.includes(nombre);

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(cantLetras);
console.log(primerLetraNombre);
console.log(ultimaLetraApellido);
console.log(eliminarEspacios);
console.log(contiene);
