const getTrue = () => true;

//siempre devuelve true
console.log(getTrue());

//promesa que espera 5seg
const asynFunction = new Promise((resolve, reject) => {
  /* setTimeout(() => {
        resolve()
    }, 5000); */
});
//devolvemos el success de la promesa
asynFunction.then(() => console.log("Hola, soy una promesa!"));

//generador de indices
function* indices() {
  let i = 0;
  while (true) {
    i += 2;
    if (i >= 20) {
      return i;
    }
    yield i;
  }
}
const gen = indices();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
