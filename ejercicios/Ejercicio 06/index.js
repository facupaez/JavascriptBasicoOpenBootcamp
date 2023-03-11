const compras = ["Queso", "Pan", "Azucar", "Dulce de Leche", "Cafe"];
//agregar elemento
compras.push("Aceite de Girasoil");
console.log(compras);
//eliminar ultimo elemento
compras.pop();
console.log(compras);

//lista de objetos peliculas
const peliculasFavoritas = [
  {
    titulo: "Harry Potter y la Orden del Fénix",
    director: "Chris Columbus",
    fecha: 2007,
  },
  {
    titulo: "Harry Potter y las Reliquias de la Muerte",
    director: "Alfonso Cuaron",
    fecha: 2010,
  },
  {
    titulo: "Harry Potter y la Piedra Filosofal",
    director: "Mike Newell",
    fecha: 2001,
  },
];

//filtro peliculas mayores al año 2010
const peliculasNuevas = peliculasFavoritas.filter((obj) => obj.fecha >= 2010);
console.log(peliculasNuevas);

//filtro directores de peliculas
const directoresPelicuas = peliculasFavoritas.map(
  (valor) => `${valor.director}`
);
console.log(directoresPelicuas);

//filtro titulos de peliculas
const titulosPelicuas = peliculasFavoritas.map((valor) => `${valor.titulo}`);
console.log(titulosPelicuas);

//concatenar listas de directores + lista de titulos usando concat
const listaDirectoresListaTitulos = directoresPelicuas.concat(titulosPelicuas);
console.log(listaDirectoresListaTitulos);

//concatenar listas de directores + lista de titulos usando
const listaDirectoresListaTitulosProp = [
  ...directoresPelicuas,
  ...titulosPelicuas,
];
console.log(listaDirectoresListaTitulosProp);
