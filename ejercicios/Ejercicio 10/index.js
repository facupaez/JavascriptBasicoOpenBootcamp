import * as controller from "./controller.js";
import chalk from "chalk";

//importamos funciones desde controller
const suma = controller.suma(1, 2);
console.log(`El resultado de la suma es: ${suma}`);

const multiplicacion = controller.multiplica(4, 5);
console.log(
  chalk.green(`El resultado de la multiplicación es: ${multiplicacion}`)
);
