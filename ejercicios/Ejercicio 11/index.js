class Estudiante {
  nombre = "Carlos";
  asignaturas = ["Javascript", "HTML", "CSS"];

  obtenDatos() {
    return { nombre: this.nombre, asignaturas: this.asignaturas };
  }
}

const estudiante = new Estudiante("John");
//obtener datos desde metodo GET
console.log(estudiante.obtenDatos());
