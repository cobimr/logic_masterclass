const { log } = console;

// O(n^2) version

// Write a function called same, wich accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array. The frecuency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false (must be same frecuency)

log(same([1, 2, 3], [4, 1, 9]));

function same(arr1, arr2) {
  // Validar que tengan el mismo length
  if (arr1.length === arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // Validar que exista un valor al cuadrado en el array2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // Si el index al cuadrado del array2 no existe
    if (correctIndex === -1) {
      return false;
    }
    // Si el index existe, eliminarlo
    arr2.splice(correctIndex, 1);
  }
  return true; // Si el loop fue completado correctamente
}