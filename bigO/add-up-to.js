/*
ESP: Escriba una funcion que calcule la suma de todos los numeros
desde el 1 hasta (incluyendo) el numero n

ENG: Write a function that calculate the sum of all numbers starting
in 1 to (and including) the number n 
*/

// SLOW WAY
function slowerAddUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.time('Slower Func')
slowerAddUpTo(1000000000);
console.timeEnd('Slower Func')

// FAST WAY
function fasterAddUpTo(n) {
  return n * (n + 1) / 2;
}

console.time('Faster Func')
fasterAddUpTo(1000000000);
console.timeEnd('Faster Func')