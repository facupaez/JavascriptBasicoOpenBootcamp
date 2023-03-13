function fibonacci(num) {
  if (num <= 1) return num;

  let arr = [1, 1];

  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}

const resultado = fibonacci(6);

console.log(resultado);
