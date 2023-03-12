const logger = require("./logger");

const esPar = (num) => {
  if (num % 2 === 0) return `El número ${num} es par`;
  throw new Error(`El número ${num} no es par`);
};

const numero = 3;

try {
  const pregunta = esPar(numero);
  console.log(pregunta);
} catch (e) {
  logger.error(`${e}`);
}
