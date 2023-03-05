let resultadoFor = 1;
for (let i = 1; i <= 10; i++) {
  resultadoFor *= i;
}
console.log("El factorial de 10 es:", resultadoFor);

let contador = 1;
let resultadoWhile = 1;
while (contador <= 10) {
  resultadoWhile *= contador;
  contador++;
}
console.log("El factorial de 10 es:", resultadoWhile);

contador = 1;
resultadoWhile = 1;
while (contador < 20) {
  resultadoWhile *= contador;
  contador++;
  if (contador === 11) {
    break;
  }
}
console.log("El factorial de 10 es:", resultadoWhile);
