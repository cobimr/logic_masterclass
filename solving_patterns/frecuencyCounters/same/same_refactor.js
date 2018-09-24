const { log } = console;

// O(n) Version

log(same([1, 2, 3], [4, 1, 9]));

function same(arr1, arr2) {
  // Validar que tengan el mismo length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Create and Object for each array
  let frecuencyCounter1 = {};
  let frecuencyCounter2 = {};
  // Loop for each arrays and add the values to the object
  for (let val of arr1) {
    frecuencyCounter1[val] = (frecuencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frecuencyCounter2[val] = (frecuencyCounter2[val] || 0) + 1;
  }
  // Make the validations
  for (let key in frecuencyCounter1) {
    if (!(key ** 2 in frecuencyCounter2)) {
      return false;
    }
    if (frecuencyCounter2[key ** 2] !== frecuencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
